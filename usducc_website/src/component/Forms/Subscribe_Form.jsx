import HubSpotForm from "../HubSpotForm.jsx";
import { HUBSPOT_FORM_IDS } from "../../hubspot-forms.config.js";

function SubscribeForm() {
  return (
    <div>
      <h3>Join our newsletter</h3>
      <HubSpotForm formId={HUBSPOT_FORM_IDS.SUBSCRIBE} />
    </div>
  );
}

export default SubscribeForm;
