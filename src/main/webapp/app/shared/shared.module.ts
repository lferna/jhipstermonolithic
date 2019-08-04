import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipstermonolithicSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipstermonolithicSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipstermonolithicSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstermonolithicSharedModule {
  static forRoot() {
    return {
      ngModule: JhipstermonolithicSharedModule
    };
  }
}
