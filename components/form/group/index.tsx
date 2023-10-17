import { ChangeEvent, FC } from "react";
import type { IconType } from 'react-icons'
import { Form, FormLabel, InputGroup, Row } from "react-bootstrap";

import { Col, FormControl, FormGroup } from '../styles'

interface Props {
  InputIcon: IconType; 
  labelText: string;
  inputPHolder: string;
  inputType: string;
  controlId: string;
  className?: string; /**@default mb-2 */
  required?: boolean;
  feedback?: string;
  captureInput: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const FormItem: FC<Props> = ({
  labelText, InputIcon, inputPHolder, inputType, className = "mb-2", controlId, required, captureInput, feedback
}) => {
  return (
    <FormGroup as={Row} className={`justify-content-center ${className}`} controlId={controlId}>
      <FormLabel column xs="2">
        {labelText}
      </FormLabel>

      <Col sm="10">
        <InputGroup hasValidation>
          <InputGroup.Text>
             <InputIcon /> 
          </InputGroup.Text>
          <FormControl type={inputType} placeholder={inputPHolder} onChange={captureInput} required={required}/>
          <Form.Control.Feedback type="invalid">
            {(feedback) ?? `Insira um(a) ${labelText} válido(a)`}
          </Form.Control.Feedback>
        </InputGroup>
      </Col>

    </FormGroup>
  )
}

export default FormItem;