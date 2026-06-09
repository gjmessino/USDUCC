import HubSpotForm from "../HubSpotForm.jsx";
import { HUBSPOT_FORM_IDS } from "../../hubspot-forms.config.js";

function MembershipIntake() {
  return <HubSpotForm formId={HUBSPOT_FORM_IDS.MEMBERSHIP} />;
}

export default MembershipIntake;
