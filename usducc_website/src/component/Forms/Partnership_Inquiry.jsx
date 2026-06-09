import HubSpotForm from "../HubSpotForm.jsx";
import { HUBSPOT_FORM_IDS } from "../../hubspot-forms.config.js";

function PartnershipInquiry() {
  return <HubSpotForm formId={HUBSPOT_FORM_IDS.PARTNERSHIP} />;
}

export default PartnershipInquiry;
