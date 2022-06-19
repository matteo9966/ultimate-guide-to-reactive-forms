import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { validationMessages } from "../messages";

@Component({
  selector: "shared-ui-text",
  templateUrl: "./ui-text-input.component.html",
  styles: ["./ui-text-input.component.css"]
})
export class SharedUiTextInputComponent {
  @Input() label = "";
  @Input() control: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
