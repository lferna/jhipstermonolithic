import { NgModule } from '@angular/core';

import { JhipstermonolithicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipstermonolithicSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipstermonolithicSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipstermonolithicSharedCommonModule {}
