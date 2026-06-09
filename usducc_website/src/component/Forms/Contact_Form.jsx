import HubSpotForm from "../HubSpotForm.jsx";
import { HUBSPOT_FORM_IDS } from "../../hubspot-forms.config.js";

function ContactForm() {
  return <HubSpotForm formId={HUBSPOT_FORM_IDS.CONTACT} />;
}

export default ContactForm;
