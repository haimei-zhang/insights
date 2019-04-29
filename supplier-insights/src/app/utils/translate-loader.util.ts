import { HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18N_DIR } from '../../constants';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, I18N_DIR, '.json');
}
