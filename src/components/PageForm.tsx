import { useContext } from "react";
import { Form } from "@rjsf/mui";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { UiSchema, RJSFSchema } from "@rjsf/utils";
import useRequest, { WithId } from "../utils/useRequest";
import { AuthContext } from "../contexts/AuthContext";

interface PageFormProps<T> {
  data: T | null;
  uiSchema: UiSchema;
  schema: RJSFSchema;
  pageId: string;
}

function PageForm<T extends WithId>({
  data,
  uiSchema,
  schema,
  pageId,
}: PageFormProps<T>) {
  const { token } = useContext(AuthContext);
  const { updateData } = useRequest<T>();

  const onSubmit = (data: IChangeEvent<T>) => {
    const { formData } = data;
    if (!formData) return;
    console.log(formData);
    token && updateData(formData, pageId, token);
  };

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      onSubmit={onSubmit}
      formData={data}
    />
  );
}

export default PageForm;
