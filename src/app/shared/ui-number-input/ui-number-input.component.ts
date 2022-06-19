import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { validationMessages } from "../messages";

@Component({
  selector: "shared-ui-number",
  templateUrl: "./ui-number-input.component.html",
  styles: ["./ui-number-input.component.css"]
})
export class SharedUiNumberInputComponent {
  @Input() label = "";
  @Input() control: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
