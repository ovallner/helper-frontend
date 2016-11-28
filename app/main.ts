import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { UserService } from './user.service';
import { AccountsService } from './accounts.service';



const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule, [UserService, AccountsService]);
