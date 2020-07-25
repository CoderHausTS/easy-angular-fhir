import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { ConformanceParserService } from './services/conformance-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConfigService.settings.env.title;
}
