(function () {
  var TYPEFORM_BASES = [
    "https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/",
    "https://kathyelejoana.pro.typeform.com/to/p5KmnaIC",
    "https://kathyelejoana.typeform.com/to/p5KmnaIC/",
    "https://kathyelejoana.typeform.com/to/p5KmnaIC",
  ];

  function safeGetLS(key) {
    try {
      return localStorage.getItem(key) || "";
    } catch (e) {
      return "";
    }
  }

  function safeSetLS(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function getUrlParam(param) {
    try {
      return new URLSearchParams(window.location.search).get(param) || "";
    } catch (e) {
      return "";
    }
  }

  function getCookie(name) {
    try {
      var match = document.cookie.match(
        new RegExp(
          "(?:^|; )" + name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)"
        )
      );
      return match ? decodeURIComponent(match[1]) : "";
    } catch (e) {
      return "";
    }
  }

  function toUnixSeconds(timestamp) {
    var parsed = parseInt(timestamp, 10);
    if (!Number.isFinite(parsed)) return Math.floor(Date.now() / 1000);
    return parsed > 9999999999 ? Math.floor(parsed / 1000) : parsed;
  }

  function buildFbc(fbclid, timestampSec) {
    if (!fbclid) return "";
    return "fb.1." + toUnixSeconds(timestampSec) + "." + fbclid;
  }

  function mergeParams(url, paramsObj) {
    try {
      var parsedUrl = new URL(url, window.location.href);
      Object.keys(paramsObj).forEach(function (key) {
        var value = paramsObj[key];
        if (value !== null && value !== undefined && value !== "") {
          parsedUrl.searchParams.set(key, value);
        }
      });
      return parsedUrl.toString();
    } catch (e) {
      return url;
    }
  }

  function isOurTypeformUrl(url) {
    if (!url) return false;
    return TYPEFORM_BASES.some(function (base) {
      return url.indexOf(base) === 0 || url.indexOf(base.replace(/^https?:\/\//, "")) !== -1;
    });
  }

  var nowSec = Math.floor(Date.now() / 1000);
  var fbclid = getUrlParam("fbclid");
  var utmSource = getUrlParam("utm_source");
  var utmMedium = getUrlParam("utm_medium");
  var utmCampaign = getUrlParam("utm_campaign");
  var utmContent = getUrlParam("utm_content");
  var utmTerm = getUrlParam("utm_term");
  var userAgent = navigator.userAgent || "";

  var fbpCookie = getCookie("_fbp");
  var fbcCookie = getCookie("_fbc");

  if (fbclid) {
    safeSetLS("trk_fbclid", fbclid);
    safeSetLS("trk_fb_ts", String(nowSec));
    safeSetLS("trk_fbc", buildFbc(fbclid, nowSec));
  }

  if (utmSource) safeSetLS("trk_utm_source", utmSource);
  if (utmMedium) safeSetLS("trk_utm_medium", utmMedium);
  if (utmCampaign) safeSetLS("trk_utm_campaign", utmCampaign);
  if (utmContent) safeSetLS("trk_utm_content", utmContent);
  if (utmTerm) safeSetLS("trk_utm_term", utmTerm);

  if (fbpCookie) safeSetLS("trk_fbp", fbpCookie);
  if (fbcCookie) safeSetLS("trk_fbc_cookie", fbcCookie);

  function getBundle() {
    var savedFbclid = safeGetLS("trk_fbclid") || fbclid;
    var savedTsSec = safeGetLS("trk_fb_ts") || String(nowSec);
    var savedFbp = safeGetLS("trk_fbp") || getCookie("_fbp") || "";
    var savedFbc =
      safeGetLS("trk_fbc_cookie") ||
      getCookie("_fbc") ||
      safeGetLS("trk_fbc") ||
      buildFbc(savedFbclid, savedTsSec);

    return {
      fbclid: savedFbclid,
      fb_timestamp: savedTsSec,
      fbc: savedFbc,
      fbp: savedFbp,
      user_agent: userAgent,
      utm_source: safeGetLS("trk_utm_source") || utmSource || "direct",
      utm_medium: safeGetLS("trk_utm_medium") || utmMedium || "none",
      utm_campaign: safeGetLS("trk_utm_campaign") || utmCampaign || "none",
      utm_content: safeGetLS("trk_utm_content") || utmContent || "none",
      utm_term: safeGetLS("trk_utm_term") || utmTerm || "none",
    };
  }

  function updateAllLinks() {
    var bundle = getBundle();
    var links = document.querySelectorAll("a[href]");
    links.forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (!isOurTypeformUrl(href)) return;
      anchor.setAttribute("href", mergeParams(href, bundle));
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      var anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
      if (!anchor) return;

      var href = anchor.getAttribute("href");
      if (!isOurTypeformUrl(href)) return;

      anchor.setAttribute("href", mergeParams(href, getBundle()));
    },
    true
  );

  window.openTypeform = function () {
    var finalUrl = mergeParams(TYPEFORM_BASES[0], getBundle());
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  (function waitForFbp(maxAttempts) {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts += 1;
      var currentFbp = getCookie("_fbp");
      if (currentFbp) {
        safeSetLS("trk_fbp", currentFbp);
        clearInterval(timer);
        updateAllLinks();
      } else if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 500);
  })(30);

  updateAllLinks();

  try {
    var observer = new MutationObserver(function () {
      updateAllLinks();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
})();
