import { NgModule } from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition, IconName, IconPrefix} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faBell,
  faChevronLeft,
  faChevronRight, faCircle, faCircleNotch, faComment, faCommenting,
  faCompass, faEdit, faEgg, faEllipsisVertical,
  faHome, faMinus, faPaperPlane,
  faPlus, faSave, faSearch, faShare, faShareNodes,
  faSpinner, faTimes, faUser, faUserCheck, faUserCircle, faUserMinus, faUserPlus, faUsers, faX
} from '@fortawesome/free-solid-svg-icons';

// Registers a free icon under the name of a Font Awesome Pro icon so templates
// that reference Pro icons keep working without a Pro license.
const alias = (icon: IconDefinition, prefix: IconPrefix, iconName: string): IconDefinition =>
  ({...icon, prefix, iconName: iconName as IconName});

const icons: IconDefinition[] = [
  faChevronRight,
  faChevronLeft,
  faSpinner,
  faPlus,
  faHome,
  faCompass,
  faBell,
  faSearch,
  faUserCircle,
  faComment,
  faCommenting,
  faShare,
  faShareNodes,
  faEgg,
  faMinus,
  faCircle,
  faTimes,
  faX,
  faCircleNotch,
  faEllipsisVertical,
  faEdit,
  faAngleDown,
  faSave,
  faUserPlus,
  faUserCheck,
  faUserMinus,
  faUser,
  faUsers,
  alias(faCircleNotch, 'fas', 'spinner-third'),
  alias(faCircleNotch, 'fad', 'spinner-third'),
  alias(faUsers, 'fad', 'users'),
  alias(faPaperPlane, 'fas', 'paper-plane-top'),
  alias(faEgg, 'fas', 'egg-fried')
];

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
