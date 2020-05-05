'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "orionApplication.aboutBox.aboutApplicationLink": "About {applicationName} Page",
  "orionApplication.aboutBox.additionalInformation": "For additional information, visit {url}",
  "orionApplication.aboutBox.buildDateTime": "Build Date/Time: {buildDateTime}",
  "orionApplication.aboutBox.copyrightSectionTitle": "Warning",
  "orionApplication.aboutBox.copyrightWarning1": "This computer program is protected by copyright law and international treaties. Unauthorised reproduction or distribution of this program, or any portion of it, may result in severe civil and criminal penalties.",
  "orionApplication.aboutBox.copyrightWarning2": "Copyright © {year} Cerner Corporation. All Rights Reserved. Contains Cerner's confidential and proprietary information.",
  "orionApplication.aboutBox.customInformation": "For details about {name}, visit {url}",
  "orionApplication.aboutBox.dateOfManufactureIconLabel": "Date of Manufacture",
  "orionApplication.aboutBox.licensing": "For details about free and open-source software licensing and regulatory information, visit {url}",
  "orionApplication.aboutBox.licensingSectionTitle": "Licensing and Regulatory Information",
  "orionApplication.aboutBox.manufacturerIconLabel": "Manufacturer",
  "orionApplication.aboutBox.patentInformation": "For details about patents, visit {url}",
  "orionApplication.aboutBox.patentInformationSectionTitle": "Patent Information",
  "orionApplication.aboutBox.version": "Version: {version}",
  "orionApplication.applicationNavigation.aboutApplicationLink": "About {applicationName}",
  "orionApplication.applicationNavigation.applicationHelpLink": "{applicationName} Help",
  "orionApplication.applicationNavigation.lockSessionUtilityItem": "Lock",
  "orionApplication.applicationNavigation.securitySettingsUtilityItem": "Security Settings",
  "orionApplication.applicationNavigation.utilityMenu.help": "Help",
  "orionApplication.helpMenu.title": "Help and About Options",
  "orionApplication.sessionError.message": "{applicationName} failed to retrieve session details.",
  "orionApplication.sessionError.retry": "Retry",
  "partogram-engine.abortions": "Pregnancy Losses",
  "partogram-engine.additonalBabyInfo": "Additional Information",
  "partogram-engine.babyInformation": "Rupture of Membrane",
  "partogram-engine.bad-request": "Incorrect parameters",
  "partogram-engine.blood-type": "Blood Type",
  "partogram-engine.cervix-dilation": "Cervical Dilation (cm)",
  "partogram-engine.contraction-failed-to-load": "Error! Failed to load.",
  "partogram-engine.DAYS_ABBR": "d",
  "partogram-engine.DELIVERED": "Delivered",
  "partogram-engine.deliveryInformation": "Delivery Information",
  "partogram-engine.discontinued": "Discontinued",
  "partogram-engine.DOB": "Date/Time of Birth",
  "partogram-engine.duration": "Duration:",
  "partogram-engine.duration-exceeded": "ROM duration has exceeded 12 hours.",
  "partogram-engine.ectopic": "Ectopic",
  "partogram-engine.edd": "EDD",
  "partogram-engine.ega": "EGA",
  "partogram-engine.epidural": "Epidural",
  "partogram-engine.estimatedGestationalAge": "EGA at Delivery",
  "partogram-engine.fetal-station": "Fetal Station",
  "partogram-engine.fhr-failed-to-load": "Error! Failed to load.",
  "partogram-engine.field-not-configured": "The field is not configured",
  "partogram-engine.fifth-palpables": "Fifth Palpables",
  "partogram-engine.G": "G",
  "partogram-engine.gbs-status": "GBS Status",
  "partogram-engine.gestational-information": "Gestational Information",
  "partogram-engine.gravida": "Gravida",
  "partogram-engine.gravida-para": "Gravida/Parity",
  "partogram-engine.heart-rate": "FHR range (bpm)",
  "partogram-engine.hours": "h",
  "partogram-engine.incorrect-config-message": "The Partogram Start filter has not been properly configured. Contact your system administrator.",
  "partogram-engine.induced-abortion": "Induced Termination",
  "partogram-engine.internal-server-error": "Internal server error",
  "partogram-engine.invalid-result-charted": "Document a valid result for <clinical event display name> to start the Partogram.",
  "partogram-engine.labor-onset": "Labour Onset",
  "partogram-engine.laborcurve": "Labor Curve",
  "partogram-engine.living": "Living Children",
  "partogram-engine.loading-status-message": "Loading Status View",
  "partogram-engine.meows": "MEWS",
  "partogram-engine.minutes": "m",
  "partogram-engine.multipara": "Multipara",
  "partogram-engine.multiple-birth-preg": "Multiple Birth Pregnancies",
  "partogram-engine.multiple-epidural": "There were multiple epidural starts.",
  "partogram-engine.N": "N",
  "partogram-engine.NEG": "NEG",
  "partogram-engine.NEGATIVE": "NEGATIVE",
  "partogram-engine.no-data": "No Data",
  "partogram-engine.no-partogram": "Not available.",
  "partogram-engine.no-partogram-start-charted-message": "Document a valid result to start the Partogram.",
  "partogram-engine.no-partogram-start-charted-title": "Partogram not started",
  "partogram-engine.no-preg-message": "This patient does not have active pregnancy.",
  "partogram-engine.no-results-found": "No results Found",
  "partogram-engine.nullipara": "Nullipara",
  "partogram-engine.oxytocin": "Oxytocin",
  "partogram-engine.P": "P",
  "partogram-engine.para-full-term": "Para Term",
  "partogram-engine.para-pre-term": "Para Pre-Term",
  "partogram-engine.parity-abbr": "P",
  "partogram-engine.parto-contraction-label": "Contraction Frequency",
  "partogram-engine.parto-contraction-no-intensity": "No Intensity",
  "partogram-engine.parto-contractions-header": "Contractions",
  "partogram-engine.parto-fhr-header": "Fetal Heart Rate",
  "partogram-engine.parto-overview-header": "Partogram Overview",
  "partogram-engine.partogram": "Success.",
  "partogram-engine.partogram-failed-to-load": "Error! Failed to load.",
  "partogram-engine.patient-not-female": "Partogram information not applicable.",
  "partogram-engine.POS": "POS",
  "partogram-engine.POSITIVE": "POSITIVE",
  "partogram-engine.preg-data-error": "Error retrieving pregnancy data.",
  "partogram-engine.pregnancy-descriptor": "Pregnancy Descriptor",
  "partogram-engine.pregnancy-unknown": "At least one historic pregnancy with an unknown outcome is documented for this patient. Ensure that all historic pregnancies are documented correctly to ensure that parity is accurately displayed.",
  "partogram-engine.prev_C_Section": "Previous C-Section",
  "partogram-engine.ROM": "ROM:",
  "partogram-engine.romStart": "ROM Date/Time",
  "partogram-engine.spontaneous-abortion": "Miscarriage",
  "partogram-engine.start": "Start",
  "partogram-engine.start-partogram": "Start Partogram",
  "partogram-engine.start-time": "Start Time",
  "partogram-engine.StartDateTime": "Start Date/Time",
  "partogram-engine.stop": "Stop:",
  "partogram-engine.stop-time": "Stop Time",
  "partogram-engine.StopDateTime": "Stop Date/Time",
  "partogram-engine.unauthorized": "Unauthorised request",
  "partogram-engine.WEEKS_ABBR": "w",
  "Stella.Timeline.allFieldsRequiredErrorText": "All fields are required.",
  "Stella.Timeline.Button.Disabled": "{button} disabled",
  "Stella.Timeline.cancelButtonText": "Cancel",
  "Stella.Timeline.DatePopupDisplay12": "DD MMM YYYY hh:mm A",
  "Stella.Timeline.DatePopupDisplay24": "DD MMM YYYY HH:mm",
  "Stella.Timeline.dateRange": "Viewing content from {startDate} to {endDate}.",
  "Stella.Timeline.dateTimeText": "Date and Time:",
  "Stella.Timeline.DaylightSavingsTime": "Daylight Savings Time",
  "Stella.Timeline.DST": "DST",
  "Stella.Timeline.ER": "dddd-dddd",
  "Stella.Timeline.eR": "ddd-ddd",
  "Stella.Timeline.eT": "ddd HH:mm",
  "Stella.Timeline.Interval": "Interval",
  "Stella.Timeline.invalidEntryText": "Invalid Entry.",
  "Stella.Timeline.LastLoadLabel": "Last Load",
  "Stella.Timeline.LowerBarDesc": "Lower Timeline bar",
  "Stella.Timeline.mD": "D MMM",
  "Stella.Timeline.mDR": "D[ ]MMM-D[ ]MMM",
  "Stella.Timeline.mDY": "D[ ]MMM[ ]YYYY",
  "Stella.Timeline.MDY": "D[ ]MMMM[ ]YYYY",
  "Stella.Timeline.mDYR": "D MMM-D MMM[ ]YYYY",
  "Stella.Timeline.MDYR": "D MMMM-D MMMM[ ]YYYY",
  "Stella.Timeline.mY": "MMM[ ]YYYY",
  "Stella.Timeline.MY": "MMM[ ]YYYY",
  "Stella.Timeline.NA": " ",
  "Stella.Timeline.requiredFieldText": "Required fields are marked with an asterisk.",
  "Stella.Timeline.returnButtonText": "Return",
  "Stella.Timeline.returnLabel": "Return to initial view",
  "Stella.Timeline.selectDateTime": "Select Date and Time",
  "Stella.Timeline.SelectedDateTimeLabel": "Selected Date and Time",
  "Stella.Timeline.SelectViewDropDown": "Select view drop down. Current value {currentView}. Minimum value {minView}. Maximum value {maxView}.",
  "Stella.Timeline.Step.DAY_1": "1 day",
  "Stella.Timeline.Step.DAYS_10": "10 days",
  "Stella.Timeline.Step.DAYS_15": "15 days",
  "Stella.Timeline.Step.DAYS_16": "16 days",
  "Stella.Timeline.Step.DAYS_180": "180 days",
  "Stella.Timeline.Step.DAYS_2": "2 days",
  "Stella.Timeline.Step.DAYS_20": "20 days",
  "Stella.Timeline.Step.DAYS_3": "3 days",
  "Stella.Timeline.Step.DAYS_30": "30 days",
  "Stella.Timeline.Step.DAYS_4": "4 days",
  "Stella.Timeline.Step.DAYS_45": "45 days",
  "Stella.Timeline.Step.DAYS_5": "5 days",
  "Stella.Timeline.Step.DAYS_60": "60 days",
  "Stella.Timeline.Step.DAYS_8": "8 days",
  "Stella.Timeline.Step.DAYS_90": "90 days",
  "Stella.Timeline.Step.HOUR_1": "1 hour",
  "Stella.Timeline.Step.HOURS_12": "12 hours",
  "Stella.Timeline.Step.HOURS_2": "2 hours",
  "Stella.Timeline.Step.HOURS_24": "24 hours",
  "Stella.Timeline.Step.HOURS_3": "3 hours",
  "Stella.Timeline.Step.HOURS_4": "4 hours",
  "Stella.Timeline.Step.HOURS_48": "48 hours",
  "Stella.Timeline.Step.HOURS_6": "6 hours",
  "Stella.Timeline.Step.HOURS_8": "8 hours",
  "Stella.Timeline.Step.Info.DAY_1": "1 day intervals",
  "Stella.Timeline.Step.Info.DAYS_10": "10 day intervals",
  "Stella.Timeline.Step.Info.DAYS_15": "15 day intervals",
  "Stella.Timeline.Step.Info.DAYS_16": "16 day intervals",
  "Stella.Timeline.Step.Info.DAYS_180": "180 day intervals",
  "Stella.Timeline.Step.Info.DAYS_2": "2 day intervals",
  "Stella.Timeline.Step.Info.DAYS_20": "20 day intervals",
  "Stella.Timeline.Step.Info.DAYS_3": "3 day intervals",
  "Stella.Timeline.Step.Info.DAYS_30": "30 day intervals",
  "Stella.Timeline.Step.Info.DAYS_4": "4 day intervals",
  "Stella.Timeline.Step.Info.DAYS_45": "45 day intervals",
  "Stella.Timeline.Step.Info.DAYS_5": "5 day intervals",
  "Stella.Timeline.Step.Info.DAYS_60": "60 day intervals",
  "Stella.Timeline.Step.Info.DAYS_8": "8 day intervals",
  "Stella.Timeline.Step.Info.DAYS_90": "90 day intervals",
  "Stella.Timeline.Step.Info.HOUR_1": "1 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_12": "12 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_2": "2 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_24": "24 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_3": "3 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_4": "4 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_48": "48 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_6": "6 hour intervals",
  "Stella.Timeline.Step.Info.HOURS_8": "8 hour intervals",
  "Stella.Timeline.Step.Info.MINUTE_1": "1 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_10": "10 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_12": "12 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_15": "15 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_18": "18 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_2": "2 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_20": "20 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_3": "3 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_30": "30 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_40": "40 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_45": "45 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_5": "5 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_6": "6 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_60": "60 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_9": "9 minute intervals",
  "Stella.Timeline.Step.Info.MINUTES_90": "90 minute intervals",
  "Stella.Timeline.Step.Info.MONTH_1": "1 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_18": "18 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_2": "2 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_3": "3 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_4": "4 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_6": "6 month intervals",
  "Stella.Timeline.Step.Info.MONTHS_9": "9 month intervals",
  "Stella.Timeline.Step.Info.YEAR_1": "1 year intervals",
  "Stella.Timeline.Step.Info.YEARS_2": "2 year intervals",
  "Stella.Timeline.Step.Info.YEARS_4": "4 year intervals",
  "Stella.Timeline.Step.MINUTE_1": "1 minute",
  "Stella.Timeline.Step.MINUTES_10": "10 minutes",
  "Stella.Timeline.Step.MINUTES_12": "12 minutes",
  "Stella.Timeline.Step.MINUTES_15": "15 minutes",
  "Stella.Timeline.Step.MINUTES_18": "18 minutes",
  "Stella.Timeline.Step.MINUTES_2": "2 minutes",
  "Stella.Timeline.Step.MINUTES_20": "20 minutes",
  "Stella.Timeline.Step.MINUTES_3": "3 minutes",
  "Stella.Timeline.Step.MINUTES_30": "30 minutes",
  "Stella.Timeline.Step.MINUTES_40": "40 minutes",
  "Stella.Timeline.Step.MINUTES_45": "45 minutes",
  "Stella.Timeline.Step.MINUTES_5": "5 minutes",
  "Stella.Timeline.Step.MINUTES_6": "6 minutes",
  "Stella.Timeline.Step.MINUTES_60": "60 minutes",
  "Stella.Timeline.Step.MINUTES_9": "9 minutes",
  "Stella.Timeline.Step.MINUTES_90": "90 minutes",
  "Stella.Timeline.Step.MONTH_1": "1 month",
  "Stella.Timeline.Step.MONTHS_18": "18 months",
  "Stella.Timeline.Step.MONTHS_2": "2 months",
  "Stella.Timeline.Step.MONTHS_3": "3 months",
  "Stella.Timeline.Step.MONTHS_4": "4 months",
  "Stella.Timeline.Step.MONTHS_6": "6 months",
  "Stella.Timeline.Step.MONTHS_9": "9 months",
  "Stella.Timeline.Step.YEAR_1": "1 year",
  "Stella.Timeline.Step.YEARS_2": "2 years",
  "Stella.Timeline.Step.YEARS_4": "4 years",
  "Stella.Timeline.submitButtonText": "Submit",
  "Stella.Timeline.T": "HH:mm",
  "Stella.Timeline.Timeframe": "Timeframe",
  "Stella.Timeline.TR": "HH:mm-HH:mm",
  "Stella.Timeline.UpperBarDesc": "Upper Timeline bar",
  "Stella.Timeline.View.DAYS_16": "16 days",
  "Stella.Timeline.View.DAYS_180": "180 days",
  "Stella.Timeline.View.DAYS_30": "30 days",
  "Stella.Timeline.View.DAYS_60": "60 days",
  "Stella.Timeline.View.DAYS_8": "8 days",
  "Stella.Timeline.View.DAYS_90": "90 days",
  "Stella.Timeline.View.HOUR_1": "1 hour",
  "Stella.Timeline.View.HOURS_12": "12 hours",
  "Stella.Timeline.View.HOURS_2": "2 hours",
  "Stella.Timeline.View.HOURS_24": "24 hours",
  "Stella.Timeline.View.HOURS_4": "4 hours",
  "Stella.Timeline.View.HOURS_48": "48 hours",
  "Stella.Timeline.View.HOURS_8": "8 hours",
  "Stella.Timeline.View.MONTHS_18": "18 months",
  "Stella.Timeline.View.Q10min": "10 minutes",
  "Stella.Timeline.View.Q15min": "15 minutes",
  "Stella.Timeline.View.Q1hour": "1 hour",
  "Stella.Timeline.View.Q1min": "1 minute",
  "Stella.Timeline.View.Q30min": "30 minutes",
  "Stella.Timeline.View.Q3min": "3 minutes",
  "Stella.Timeline.View.Q5min": "5 minutes",
  "Stella.Timeline.View.YEAR_1": "12 months",
  "Stella.Timeline.View.YEARS_4": "4 years",
  "Stella.Timeline.viewLabel": "View",
  "Stella.Timeline.viewNext": "View next {step} from current view",
  "Stella.Timeline.viewPrevious": "View previous {step} from current view",
  "Stella.Timeline.widthErrorMessage": "Rotate your mobile device or resize the window to view the component. A minimum width of 284 pixels is required.",
  "Stella.Timeline.Y": "YYYY",
  "Stella.Timeline.Zoom.In": "Zoom in",
  "Stella.Timeline.Zoom.In.Step": "Zoom in to {step} {viewType}",
  "Stella.Timeline.Zoom.Out": "Zoom out",
  "Stella.Timeline.Zoom.Out.Step": "Zoom out to {step} {viewType}",
  "Terra.AbstractModal.BeginModalDialog": "Begin modal dialog",
  "Terra.AbstractModal.EndModalDialog": "End modal dialog",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximise",
  "Terra.actionHeader.minimize": "Minimise",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Success.",
  "Terra.alert.warning": "Warning.",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "User Options",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Skip to Content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigation Items",
  "Terra.applicationNavigation.drawerMenu.utilities": "Utility Items",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Skip to Content",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "User Settings",
  "Terra.applicationNavigation.notifications.new": "New",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "More Navigation",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "More",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilities",
  "Terra.applicationNavigation.utilityMenu.help": "Help",
  "Terra.applicationNavigation.utilityMenu.logout": "Logout",
  "Terra.applicationNavigation.utilityMenu.settings": "Settings",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.datePicker.calendarInstructions": "To change the selection, use the arrow keys. Press Enter to select a date. Press Escape to close the date picker pop-up.",
  "Terra.datePicker.closeCalendar": "Close",
  "Terra.datePicker.date": "Date",
  "Terra.datePicker.dateFormat": "DD/MM/YYYY",
  "Terra.datePicker.disabled": "Disabled",
  "Terra.datePicker.monthLabel": "Month",
  "Terra.datePicker.nextMonth": "Next month",
  "Terra.datePicker.openCalendar": "Open Calendar",
  "Terra.datePicker.previousMonth": "Previous month",
  "Terra.datePicker.today": "Today",
  "Terra.datePicker.yearLabel": "Year",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Before (Daylight Saving)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "After (Standard Time)",
  "Terra.dateTimePicker.timeClarification.message": "The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time?",
  "Terra.dateTimePicker.timeClarification.title": "Time Clarification",
  "Terra.devSite.themed.help": "Help",
  "Terra.dropdownButton.moreOptions": "More Options",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.field.required": "Required",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.ariaLabel": "Search",
  "Terra.form.select.clearSelect": "Clear select",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.defaultUsageGuidance": "Use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.dimmed": "Dimmed.",
  "Terra.form.select.disabled": "Disabled.",
  "Terra.form.select.listOfTotalOptions": "List of {total} options.",
  "Terra.form.select.maxSelectionHelp": "Limit {text} items.",
  "Terra.form.select.maxSelectionOption": "Maximum number of {text} items selected",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Tap to navigate to options.",
  "Terra.form.select.mobileUsageGuidance": "Swipe right to navigate to options.",
  "Terra.form.select.multiSelectUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select or unselect an option.",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.form.select.optGroup": "Group {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.selectCleared": "Select value cleared",
  "Terra.form.select.selected": "Selected.",
  "Terra.form.select.selectedText": "{text} Selected.",
  "Terra.form.select.unselected": "Unselected.",
  "Terra.form.select.unselectedText": "{text} Unselected",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.InfiniteList.loading": "Loading...",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close",
  "Terra.navigation.side.menu.selected": "Selected",
  "Terra.notification.dialog.alert": "Alert",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Success",
  "Terra.notification.dialog.warning": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.popup.header.close": "Close",
  "Terra.searchField.clear": "Clear",
  "Terra.searchField.search": "Search",
  "Terra.searchField.submit-search": "Submit Search",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorised",
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.seconds": "Seconds",
  "Terra.timeInput.ss": "ss",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Don't Save",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "There are unsaved changes made to the following:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continue Editing",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "There are unsaved changes made to {promptDescription}. Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.title": "There are unsaved changes."
};
var areTranslationsLoaded = true;
var locale = 'en-GB';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
