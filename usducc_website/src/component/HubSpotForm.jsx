import { useEffect, useId } from "react";
import { HUBSPOT_PORTAL_ID } from "../hubspot-forms.config.js";

/**
 * Embeds a HubSpot-hosted form by formId.
 *
 * Props:
 *   formId  – the form GUID from your HubSpot portal
 *   onReady – optional callback fired after the form renders
 */
function HubSpotForm({ formId, onReady }) {
  const uid = useId().replace(/:/g, "");
  const targetId = `hs-form-${uid}`;

  useEffect(() => {
    if (!formId || formId === "REPLACE_WITH_FORM_ID") return;

    function createForm() {
      if (!window.hbspt) return;
      window.hbspt.forms.create({
        region: "na1",
        portalId: HUBSPOT_PORTAL_ID,
        formId,
        target: `#${targetId}`,
        css: "",          // strip HubSpot's default styles; site CSS takes over
        onFormReady: onReady,
      });
    }

    // If the script is already loaded, create immediately
    if (window.hbspt) {
      createForm();
      return;
    }

    // Otherwise load the embed script once and wait for it
    if (!document.getElementById("hs-forms-script")) {
      const script = document.createElement("script");
      script.id = "hs-forms-script";
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      // Script tag exists but hbspt not yet ready — poll briefly
      const poll = setInterval(() => {
        if (window.hbspt) {
          clearInterval(poll);
          createForm();
        }
      }, 100);
      return () => clearInterval(poll);
    }
  }, [formId, targetId, onReady]);

  if (!formId || formId === "REPLACE_WITH_FORM_ID") {
    return (
      <p style={{ color: "#888", fontStyle: "italic" }}>
        Form not configured yet — run{" "}
        <code>node scripts/setup-hubspot-forms.js</code> to connect this form
        to HubSpot.
      </p>
    );
  }

  return <div id={targetId} />;
}

export default HubSpotForm;
