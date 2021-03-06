'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "orionApplication.aboutBox.aboutApplicationLink": "Página Acerca de {applicationName}",
  "orionApplication.aboutBox.additionalInformation": "Para obtener información adicional, visite {url}",
  "orionApplication.aboutBox.buildDateTime": "Configurar fecha/hora: {buildDateTime}",
  "orionApplication.aboutBox.copyrightSectionTitle": "Advertencia",
  "orionApplication.aboutBox.copyrightWarning1": "Este programa informático está protegido por la ley de copyright y los tratados internacionales. La reproducción o distribución no autorizadas de este programa, o de cualquiera de sus partes, puede conllevar graves sanciones civiles y penales.",
  "orionApplication.aboutBox.copyrightWarning2": "Copyright © {year} Cerner Corporation. Todos los derechos reservados. Contiene información confidencial y reservada de Cerner.",
  "orionApplication.aboutBox.customInformation": "Para obtener información detallada acerca de {name}, visite {url}",
  "orionApplication.aboutBox.dateOfManufactureIconLabel": "Fecha de fabricación",
  "orionApplication.aboutBox.licensing": "Para obtener más información acerca de las licencias de software de código abierto y libre e información normativa, visite {url}",
  "orionApplication.aboutBox.licensingSectionTitle": "Información normativa y sobre licencias",
  "orionApplication.aboutBox.manufacturerIconLabel": "Fabricante",
  "orionApplication.aboutBox.patentInformation": "Para obtener información detallada acerca de las patentes, visite {url}",
  "orionApplication.aboutBox.patentInformationSectionTitle": "Información sobre patentes",
  "orionApplication.aboutBox.version": "Versión: {version}",
  "orionApplication.applicationNavigation.aboutApplicationLink": "Acerca de {applicationName}",
  "orionApplication.applicationNavigation.applicationHelpLink": "Ayuda de {applicationName}",
  "orionApplication.applicationNavigation.lockSessionUtilityItem": "Bloquear",
  "orionApplication.applicationNavigation.securitySettingsUtilityItem": "Configuración de seguridad",
  "orionApplication.applicationNavigation.utilityMenu.help": "Ayuda",
  "orionApplication.helpMenu.title": "Opciones Ayuda y Acerca de",
  "orionApplication.sessionError.message": "{applicationName} se produjo un error al recuperar los detalles de la sesión.",
  "orionApplication.sessionError.retry": "Reintentar",
  "partogram-engine.abortions": "Abortos",
  "partogram-engine.additonalBabyInfo": "Información adicional",
  "partogram-engine.babyInformation": "Rotura de aguas",
  "partogram-engine.bad-request": "Parámetros incorrectos",
  "partogram-engine.blood-type": "Grupo sanguíneo",
  "partogram-engine.DAYS_ABBR": "d",
  "partogram-engine.DELIVERED": "Nacido",
  "partogram-engine.deliveryInformation": "Información del parto",
  "partogram-engine.discontinued": "Interrumpido",
  "partogram-engine.DOB": "Fecha/hora de nacimiento",
  "partogram-engine.duration": "Duración:",
  "partogram-engine.duration-exceeded": "La duración de RBA ha superado las 12 horas.",
  "partogram-engine.ectopic": "Ectópico",
  "partogram-engine.edd": "FPP",
  "partogram-engine.ega": "EGE",
  "partogram-engine.epidural": "Epidural",
  "partogram-engine.estimatedGestationalAge": "Edad gestacional estimada al parto",
  "partogram-engine.fhr-failed-to-load": "Error. Error al cargar.",
  "partogram-engine.field-not-configured": "Este campo no se ha configurado",
  "partogram-engine.G": "E",
  "partogram-engine.gbs-status": "Estado EGB",
  "partogram-engine.gestational-information": "Información gestacional",
  "partogram-engine.gravida": "Embarazos",
  "partogram-engine.gravida-para": "Embarazos/Partos",
  "partogram-engine.heart-rate": "Rango de FCF (bpm)",
  "partogram-engine.hours": "h",
  "partogram-engine.incorrect-config-message": "El filtro Inicio del partograma no se ha configurado correctamente. Póngase en contacto con el administrador del sistema.",
  "partogram-engine.induced-abortion": "Aborto inducido",
  "partogram-engine.internal-server-error": "Error interno del servidor",
  "partogram-engine.invalid-result-charted": "Documente un resultado válido para <nombre de visualización de evento clínico> para iniciar el partograma.",
  "partogram-engine.labor-onset": "Comienzo del trabajo de parto",
  "partogram-engine.living": "Recién nacidos vivos",
  "partogram-engine.meows": "MEWS",
  "partogram-engine.minutes": "m",
  "partogram-engine.multipara": "Multípara",
  "partogram-engine.multiple-birth-preg": "Embarazos de partos múltiples",
  "partogram-engine.multiple-epidural": "Se produjeron varios inicios de epidural.",
  "partogram-engine.N": "N",
  "partogram-engine.NEG": "Neg",
  "partogram-engine.NEGATIVE": "Negativo",
  "partogram-engine.no-partogram": "No disponible.",
  "partogram-engine.no-partogram-start-charted-message": "Documente un resultado válido para iniciar Partograma.",
  "partogram-engine.no-partogram-start-charted-title": "No se ha iniciado Partograma",
  "partogram-engine.no-preg-message": "Esta paciente no tiene ningún embarazo activo.",
  "partogram-engine.no-results-found": "No se encontraron resultados.",
  "partogram-engine.nullipara": "Nulípara",
  "partogram-engine.oxytocin": "Oxitocina",
  "partogram-engine.P": "P",
  "partogram-engine.para-full-term": "Número de partos a término",
  "partogram-engine.para-pre-term": "Número partos antes de término",
  "partogram-engine.parity-abbr": "P",
  "partogram-engine.parto-overview-header": "Descripción general de Partograma",
  "partogram-engine.partogram": "Realizado correctamente.",
  "partogram-engine.partogram-failed-to-load": "Error. Error al cargar.",
  "partogram-engine.patient-not-female": "Información de partograma no aplicable.",
  "partogram-engine.POS": "Pos",
  "partogram-engine.POSITIVE": "Positivo",
  "partogram-engine.preg-data-error": "Error al recuperar datos de embarazo.",
  "partogram-engine.pregnancy-descriptor": "Descriptor de embarazo",
  "partogram-engine.pregnancy-unknown": "Se documentó al menos un embarazo previo con un resultado desconocido en este paciente. Asegúrese de que todos los embarazos previos estén correctamente documentados para garantizar que los partos se muestren de forma correcta.",
  "partogram-engine.prev_C_Section": "Cesárea previa",
  "partogram-engine.ROM": "RBA:",
  "partogram-engine.romStart": "Fecha/hora de rotura de aguas",
  "partogram-engine.spontaneous-abortion": "Aborto espontáneo",
  "partogram-engine.start": "Inicio",
  "partogram-engine.start-partogram": "Iniciar Partograma",
  "partogram-engine.start-time": "Hora de inicio",
  "partogram-engine.StartDateTime": "Fecha/hora de inicio",
  "partogram-engine.stop": "Detener:",
  "partogram-engine.stop-time": "Hora de finalización",
  "partogram-engine.StopDateTime": "Fecha/hora de finalización",
  "partogram-engine.unauthorized": "Solicitud no autorizada",
  "partogram-engine.WEEKS_ABBR": "s",
  "Stella.Timeline.allFieldsRequiredErrorText": "Todos los campos son obligatorios.",
  "Stella.Timeline.Button.Disabled": "{button} desactivado",
  "Stella.Timeline.cancelButtonText": "Cancelar",
  "Stella.Timeline.DatePopupDisplay12": "DD[ de ]MMM[ de ]YYYY hh:mm A",
  "Stella.Timeline.DatePopupDisplay24": "DD[ de ]MMM[ de ]YYYY HH:mm",
  "Stella.Timeline.dateRange": "Visualizando contenido del {startDate} al {endDate}.",
  "Stella.Timeline.dateTimeText": "Fecha y hora:",
  "Stella.Timeline.DaylightSavingsTime": "Horario de ahorro de energía",
  "Stella.Timeline.DST": "DST",
  "Stella.Timeline.ER": "dddd-dddd",
  "Stella.Timeline.eR": "ddd-ddd",
  "Stella.Timeline.eT": "ddd HH:mm",
  "Stella.Timeline.Interval": "Intervalo",
  "Stella.Timeline.invalidEntryText": "Entrada no válida.",
  "Stella.Timeline.LastLoadLabel": "Última carga",
  "Stella.Timeline.LowerBarDesc": "Barra de cronograma inferior",
  "Stella.Timeline.mD": "D[ de ]MMM",
  "Stella.Timeline.mDR": "D[ de ]MMM - D[ de ]MMM",
  "Stella.Timeline.mDY": "D[ de ]MMM[ de ]YYYY",
  "Stella.Timeline.MDY": "D[ de ]MMMM[ de ]YYYY",
  "Stella.Timeline.mDYR": "D[ de ]MMM - D[ de ]MMM[ de ]YYYY",
  "Stella.Timeline.MDYR": "D[ de ]MMMM - D[ de ]MMMM[ de ]YYYY",
  "Stella.Timeline.MY": "MMM[ de ]YYYY",
  "Stella.Timeline.mY": "MMM[ de ]YYYY",
  "Stella.Timeline.NA": " ",
  "Stella.Timeline.requiredFieldText": "Los campos obligatorios se indican con un asterisco.",
  "Stella.Timeline.returnButtonText": "Volver",
  "Stella.Timeline.returnLabel": "Volver a la vista inicial",
  "Stella.Timeline.selectDateTime": "Seleccionar fecha y hora",
  "Stella.Timeline.SelectedDateTimeLabel": "Fecha y hora seleccionadas",
  "Stella.Timeline.SelectViewDropDown": "Desplegable de selección de vistas. Valor actual {currentView}. Valor mínimo {minView}. Valor máximo {maxView}.",
  "Stella.Timeline.Step.DAY_1": "1 día",
  "Stella.Timeline.Step.DAYS_10": "10 días",
  "Stella.Timeline.Step.DAYS_15": "15 días",
  "Stella.Timeline.Step.DAYS_16": "16 días",
  "Stella.Timeline.Step.DAYS_180": "180 días",
  "Stella.Timeline.Step.DAYS_2": "2 días",
  "Stella.Timeline.Step.DAYS_20": "20 días",
  "Stella.Timeline.Step.DAYS_3": "3 días",
  "Stella.Timeline.Step.DAYS_30": "30 días",
  "Stella.Timeline.Step.DAYS_4": "4 días",
  "Stella.Timeline.Step.DAYS_45": "45 días",
  "Stella.Timeline.Step.DAYS_5": "5 días",
  "Stella.Timeline.Step.DAYS_60": "60 días",
  "Stella.Timeline.Step.DAYS_8": "8 días",
  "Stella.Timeline.Step.DAYS_90": "90 días",
  "Stella.Timeline.Step.HOUR_1": "1 hora",
  "Stella.Timeline.Step.HOURS_12": "12 horas",
  "Stella.Timeline.Step.HOURS_2": "2 horas",
  "Stella.Timeline.Step.HOURS_24": "24 horas",
  "Stella.Timeline.Step.HOURS_3": "3 horas",
  "Stella.Timeline.Step.HOURS_4": "4 horas",
  "Stella.Timeline.Step.HOURS_48": "48 horas",
  "Stella.Timeline.Step.HOURS_6": "6 horas",
  "Stella.Timeline.Step.HOURS_8": "8 horas",
  "Stella.Timeline.Step.Info.DAY_1": "intervalos de 1 día",
  "Stella.Timeline.Step.Info.DAYS_10": "intervalos de 10 días",
  "Stella.Timeline.Step.Info.DAYS_15": "intervalos de 15 días",
  "Stella.Timeline.Step.Info.DAYS_16": "intervalos de 16 días",
  "Stella.Timeline.Step.Info.DAYS_180": "intervalos de 180 días",
  "Stella.Timeline.Step.Info.DAYS_2": "intervalos de 2 días",
  "Stella.Timeline.Step.Info.DAYS_20": "intervalos de 20 días",
  "Stella.Timeline.Step.Info.DAYS_3": "intervalos de 3 días",
  "Stella.Timeline.Step.Info.DAYS_30": "intervalos de 30 días",
  "Stella.Timeline.Step.Info.DAYS_4": "intervalos de 4 días",
  "Stella.Timeline.Step.Info.DAYS_45": "intervalos de 45 días",
  "Stella.Timeline.Step.Info.DAYS_5": "intervalos de 5 días",
  "Stella.Timeline.Step.Info.DAYS_60": "intervalos de 60 días",
  "Stella.Timeline.Step.Info.DAYS_8": "intervalos de 8 días",
  "Stella.Timeline.Step.Info.DAYS_90": "intervalos de 90 días",
  "Stella.Timeline.Step.Info.HOUR_1": "intervalos de 1 hora",
  "Stella.Timeline.Step.Info.HOURS_12": "intervalos de 12 horas",
  "Stella.Timeline.Step.Info.HOURS_2": "intervalos de 2 horas",
  "Stella.Timeline.Step.Info.HOURS_24": "intervalos de 24 horas",
  "Stella.Timeline.Step.Info.HOURS_3": "intervalos de 3 horas",
  "Stella.Timeline.Step.Info.HOURS_4": "intervalos de 4 horas",
  "Stella.Timeline.Step.Info.HOURS_48": "intervalos de 48 horas",
  "Stella.Timeline.Step.Info.HOURS_6": "intervalos de 6 horas",
  "Stella.Timeline.Step.Info.HOURS_8": "intervalos de 8 horas",
  "Stella.Timeline.Step.Info.MINUTE_1": "intervalos de 1 minuto",
  "Stella.Timeline.Step.Info.MINUTES_10": "intervalos de 10 minutos",
  "Stella.Timeline.Step.Info.MINUTES_12": "intervalos de 12 minutos",
  "Stella.Timeline.Step.Info.MINUTES_15": "intervalos de 15 minutos",
  "Stella.Timeline.Step.Info.MINUTES_18": "intervalos de 18 minutos",
  "Stella.Timeline.Step.Info.MINUTES_2": "intervalos de 2 minutos",
  "Stella.Timeline.Step.Info.MINUTES_20": "intervalos de 20 minutos",
  "Stella.Timeline.Step.Info.MINUTES_3": "intervalos de 3 minutos",
  "Stella.Timeline.Step.Info.MINUTES_30": "intervalos de 30 minutos",
  "Stella.Timeline.Step.Info.MINUTES_40": "intervalos de 40 minutos",
  "Stella.Timeline.Step.Info.MINUTES_45": "intervalos de 45 minutos",
  "Stella.Timeline.Step.Info.MINUTES_5": "intervalos de 5 minutos",
  "Stella.Timeline.Step.Info.MINUTES_6": "intervalos de 6 minutos",
  "Stella.Timeline.Step.Info.MINUTES_60": "intervalos de 60 minutos",
  "Stella.Timeline.Step.Info.MINUTES_9": "intervalos de 9 minutos",
  "Stella.Timeline.Step.Info.MINUTES_90": "intervalos de 90 minutos",
  "Stella.Timeline.Step.Info.MONTH_1": "intervalos de 1 mes",
  "Stella.Timeline.Step.Info.MONTHS_18": "intervalos de 18 meses",
  "Stella.Timeline.Step.Info.MONTHS_2": "intervalos de 2 meses",
  "Stella.Timeline.Step.Info.MONTHS_3": "intervalos de 3 meses",
  "Stella.Timeline.Step.Info.MONTHS_4": "intervalos de 4 meses",
  "Stella.Timeline.Step.Info.MONTHS_6": "intervalos de 6 meses",
  "Stella.Timeline.Step.Info.MONTHS_9": "intervalos de 9 meses",
  "Stella.Timeline.Step.Info.YEAR_1": "intervalos de 1 año",
  "Stella.Timeline.Step.Info.YEARS_2": "intervalos de 2 años",
  "Stella.Timeline.Step.Info.YEARS_4": "intervalos de 4 años",
  "Stella.Timeline.Step.MINUTE_1": "1 minuto",
  "Stella.Timeline.Step.MINUTES_10": "10 minutos",
  "Stella.Timeline.Step.MINUTES_12": "12 minutos",
  "Stella.Timeline.Step.MINUTES_15": "15 minutos",
  "Stella.Timeline.Step.MINUTES_18": "18 minutos",
  "Stella.Timeline.Step.MINUTES_2": "2 minutos",
  "Stella.Timeline.Step.MINUTES_20": "20 minutos",
  "Stella.Timeline.Step.MINUTES_3": "3 minutos",
  "Stella.Timeline.Step.MINUTES_30": "30 minutos",
  "Stella.Timeline.Step.MINUTES_40": "40 minutos",
  "Stella.Timeline.Step.MINUTES_45": "45 minutos",
  "Stella.Timeline.Step.MINUTES_5": "5 minutos",
  "Stella.Timeline.Step.MINUTES_6": "6 minutos",
  "Stella.Timeline.Step.MINUTES_60": "60 minutos",
  "Stella.Timeline.Step.MINUTES_9": "9 minutos",
  "Stella.Timeline.Step.MINUTES_90": "90 minutos",
  "Stella.Timeline.Step.MONTH_1": "1 mes",
  "Stella.Timeline.Step.MONTHS_18": "18 meses",
  "Stella.Timeline.Step.MONTHS_2": "2 meses",
  "Stella.Timeline.Step.MONTHS_3": "3 meses",
  "Stella.Timeline.Step.MONTHS_4": "4 meses",
  "Stella.Timeline.Step.MONTHS_6": "6 meses",
  "Stella.Timeline.Step.MONTHS_9": "9 meses",
  "Stella.Timeline.Step.YEAR_1": "1 año",
  "Stella.Timeline.Step.YEARS_2": "2 años",
  "Stella.Timeline.Step.YEARS_4": "4 años",
  "Stella.Timeline.submitButtonText": "Enviar",
  "Stella.Timeline.T": "HH:mm",
  "Stella.Timeline.Timeframe": "Período de tiempo",
  "Stella.Timeline.TR": "HH:mm-HH:mm",
  "Stella.Timeline.UpperBarDesc": "Barra de cronograma superior",
  "Stella.Timeline.View.DAYS_16": "16 días",
  "Stella.Timeline.View.DAYS_180": "180 días",
  "Stella.Timeline.View.DAYS_30": "30 días",
  "Stella.Timeline.View.DAYS_60": "60 días",
  "Stella.Timeline.View.DAYS_8": "8 días",
  "Stella.Timeline.View.DAYS_90": "90 días",
  "Stella.Timeline.View.HOUR_1": "1 hora",
  "Stella.Timeline.View.HOURS_12": "12 horas",
  "Stella.Timeline.View.HOURS_2": "2 horas",
  "Stella.Timeline.View.HOURS_24": "24 horas",
  "Stella.Timeline.View.HOURS_4": "4 horas",
  "Stella.Timeline.View.HOURS_48": "48 horas",
  "Stella.Timeline.View.HOURS_8": "8 horas",
  "Stella.Timeline.View.MONTHS_18": "18 meses",
  "Stella.Timeline.View.Q10min": "10 minutos",
  "Stella.Timeline.View.Q15min": "15 minutos",
  "Stella.Timeline.View.Q1hour": "1 hora",
  "Stella.Timeline.View.Q1min": "1 minuto",
  "Stella.Timeline.View.Q30min": "30 minutos",
  "Stella.Timeline.View.Q3min": "3 minutos",
  "Stella.Timeline.View.Q5min": "5 minutos",
  "Stella.Timeline.View.YEAR_1": "12 meses",
  "Stella.Timeline.View.YEARS_4": "4 años",
  "Stella.Timeline.viewLabel": "Ver",
  "Stella.Timeline.viewNext": "Ver {step} siguientes de la vista actual",
  "Stella.Timeline.viewPrevious": "Ver {step} anteriores de la vista actual",
  "Stella.Timeline.widthErrorMessage": "Gire su dispositivo móvil o cambie el tamaño de la ventana para ver el componente. Se requiere un ancho mínimo de 284 píxeles.",
  "Stella.Timeline.Y": "YYYY",
  "Stella.Timeline.Zoom.In": "Acercar",
  "Stella.Timeline.Zoom.In.Step": "Acercar en {step} de {viewType}",
  "Stella.Timeline.Zoom.Out": "Alejar",
  "Stella.Timeline.Zoom.Out.Step": "Alejar en {step} de {viewType}",
  "Terra.AbstractModal.BeginModalDialog": "Comenzar el diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Finalizar el diálogo modal",
  "Terra.actionHeader.back": "Retroceder",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.alert.advisory": "Recomendación.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.dismiss": "Descartar",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Información.",
  "Terra.alert.success": "Correcto.",
  "Terra.alert.warning": "Advertencia.",
  "Terra.application.tabs.more": "Más",
  "Terra.application.utility.back": "Atrás",
  "Terra.application.utility.button": "Opciones de usuario",
  "Terra.application.utility.close": "Cerrar",
  "Terra.application.utility.menu": "Menú de utilidades",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Saltar al contenido",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menú de alternancia",
  "Terra.applicationLayout.utilityDefaults.about": "Acerca de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apariencia",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Cambiar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Introducción",
  "Terra.applicationLayout.utilityDefaults.help": "Ayuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Cerrar sesión",
  "Terra.applicationLayout.utilityDefaults.menu": "Menú",
  "Terra.applicationLayout.utilityDefaults.security": "Seguridad",
  "Terra.applicationLayout.utilityDefaults.settings": "Configuración",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Condiciones de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Información de usuario",
  "Terra.applicationNavigation.drawerMenu.navigation": "Elementos de navegación",
  "Terra.applicationNavigation.drawerMenu.utilities": "Elementos de utilidades",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Elementos adicionales",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Elementos adicionales",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menú",
  "Terra.applicationNavigation.header.skipToContentTitle": "Saltar al contenido",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opciones",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Configuración de usuario",
  "Terra.applicationNavigation.notifications.new": "Nuevo",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Más opciones de navegación",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Más",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Más opciones de navegación",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilidades",
  "Terra.applicationNavigation.utilityMenu.help": "Ayuda",
  "Terra.applicationNavigation.utilityMenu.logout": "Cerrar sesión",
  "Terra.applicationNavigation.utilityMenu.settings": "Configuración",
  "Terra.collapsibleMenuView.more": "Más",
  "Terra.datePicker.calendarInstructions": "Para cambiar la selección, use las teclas de flecha. Presione Entrar para seleccionar una fecha. Presione Esc para cerrar el selector de fecha.",
  "Terra.datePicker.closeCalendar": "Cerrar",
  "Terra.datePicker.date": "Fecha",
  "Terra.datePicker.dateFormat": "DD/MM/AAAA",
  "Terra.datePicker.disabled": "Deshabilitado",
  "Terra.datePicker.monthLabel": "Mes",
  "Terra.datePicker.nextMonth": "Mes siguiente",
  "Terra.datePicker.openCalendar": "Abrir calendario",
  "Terra.datePicker.previousMonth": "Mes anterior",
  "Terra.datePicker.today": "Hoy",
  "Terra.datePicker.yearLabel": "Año",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Antes (horario de ahorro de energía)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Después (hora estándar)",
  "Terra.dateTimePicker.timeClarification.message": "La hora seleccionada coincide con la transición del horario de ahorro de energía al horario estándar. ¿Desea escribir esta información antes o después del cambio de horario de ahorro de energía a horario estándar?",
  "Terra.dateTimePicker.timeClarification.title": "Aclaración horaria",
  "Terra.devSite.themed.help": "Ayuda",
  "Terra.dropdownButton.moreOptions": "Más opciones",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.field.required": "Obligatorio",
  "Terra.form.select.add": "Agregar \"{text}\"",
  "Terra.form.select.ariaLabel": "Buscar",
  "Terra.form.select.clearSelect": "Borrar selección",
  "Terra.form.select.defaultDisplay": "- Seleccionar -",
  "Terra.form.select.defaultUsageGuidance": "Use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.dimmed": "Atenuado.",
  "Terra.form.select.disabled": "Deshabilitado.",
  "Terra.form.select.listOfTotalOptions": "Lista de {total} opciones.",
  "Terra.form.select.maxSelectionHelp": "Limite los elementos {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de elementos {text} seleccionados",
  "Terra.form.select.menu": "Menú",
  "Terra.form.select.mobileButtonUsageGuidance": "Pulse para acceder a las opciones.",
  "Terra.form.select.mobileUsageGuidance": "Deslice a la derecha para acceder a las opciones.",
  "Terra.form.select.multiSelectUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar o deseleccionar una opción.",
  "Terra.form.select.noResults": "No se encontró ningún resultado que coincida para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opciones",
  "Terra.form.select.searchUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.selectCleared": "Se borró el valor seleccionado",
  "Terra.form.select.selected": "Seleccionado.",
  "Terra.form.select.selectedText": "Se seleccionó {text}.",
  "Terra.form.select.unselected": "No seleccionado.",
  "Terra.form.select.unselectedText": "{text} sin seleccionar.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icono para instrucciones electrónicas de uso",
  "Terra.InfiniteList.loading": "Cargando...",
  "Terra.menu.back": "Retroceder",
  "Terra.menu.close": "Cerrar",
  "Terra.navigation.side.menu.selected": "Seleccionado",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Información",
  "Terra.notification.dialog.success": "Éxito",
  "Terra.notification.dialog.warning": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.popup.header.close": "Cerrar",
  "Terra.searchField.clear": "Borrar",
  "Terra.searchField.search": "Buscar",
  "Terra.searchField.submit-search": "Enviar búsqueda",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "Terra.timeInput.am": "a. m.",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "p. m.",
  "Terra.timeInput.seconds": "segundos",
  "Terra.timeInput.ss": "s",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "No guardar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Hay cambios no guardados en:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Si no se guardan los cambios, se perderán. ¿Cómo desea continuar?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Hay cambios no guardados en {promptDescription}. Si no se guardan los cambios, se perderán. ¿Cómo desea continuar?",
  "terraApplication.unsavedChangesPrompt.title": "Hay cambios no guardados."
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
