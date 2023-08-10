import { FC } from "react";
import type { IconType } from 'react-icons'
import { FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";

import { Col, FormControl } from '../styles'

interface Props {
  InputIcon: IconType; 
  labelText: string;
  inputPHolder: string;
  inputType: string;
  controlId: string;
  className?: string; /**@default mb-2 */

}

const FormItem: FC<Props> = ({labelText, InputIcon, inputPHolder, inputType, className = "mb-2", controlId}) => {
  return (
    <FormGroup as={Row} className={`justify-content-center ${className}`} controlId={controlId}>
      <FormLabel column xs="2">
        {labelText}
      </FormLabel>
      <Col sm="10">
        <InputGroup>
          <InputGroup.Text>
             <InputIcon /> 
          </InputGroup.Text>
          <FormControl type={inputType} placeholder={inputPHolder}/>
        </InputGroup>
      </Col>
    </FormGroup>
  )
}

export default FormItem;