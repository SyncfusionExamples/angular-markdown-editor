import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RichTextEditorModule, ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RichTextEditorModule,
    SplitterModule
  ],
  providers: [ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
