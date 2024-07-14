import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { RJSFSchema } from "@rjsf/utils";
import formatJSONSchema from "../../utils/formatJSONSchema";
import settingsSchema from "./settingsSchema.json";

export default function GeneralSettings() {
  const generalSchema = settingsSchema.items.properties.general;
  const schema: RJSFSchema = formatJSONSchema(generalSchema);

  return <Form schema={schema} validator={validator} />;
}