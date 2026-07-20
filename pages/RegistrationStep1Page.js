import { BasePage } from './BasePage';
export class RegistrationStep1Page extends BasePage {
  constructor(page) {
        super(page);
         this.genderMan = page.getByText('Man', {exact: true});
         this.genderWoman = page.getByText('Woman', {exact: true});
         this.completedSubStep = page.locator('.completed-sub-step');
         this.relationshipDivorced = page.getByText('Divorced', {exact: true});
         this.relationshipMarried = page.getByText('Married', {exact: true});
         this.relationshipAttached = page.getByText('Attached', {exact: true});
         this.relationshipSingle = page.getByText('Single', {exact: true});

    }
}