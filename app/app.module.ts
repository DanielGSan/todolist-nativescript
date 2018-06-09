import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { navigatableComponents, routes } from './app.routing';
import { AppComponent } from './app.component';
import { NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
