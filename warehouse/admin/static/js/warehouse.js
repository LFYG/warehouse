/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import stimulus
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

document.querySelectorAll("a[data-form-submit]").forEach(function (element) {
  element.addEventListener("click", function(event) {
    // We're turning this element into a form submission, so instead of the
    // default action, this event will handle things.
    event.preventDefault();

    // Find the form identified by our formSubmit, and submit it.
    document.querySelector("form#" + element.dataset.formSubmit).submit();
  });
});

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
