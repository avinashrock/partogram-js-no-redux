'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "orionApplication.aboutBox.aboutApplicationLink": "Página sobre {applicationName}",
  "orionApplication.aboutBox.additionalInformation": "Para mais informações, acesse {url}",
  "orionApplication.aboutBox.buildDateTime": "Data/hora de criação: {buildDateTime}",
  "orionApplication.aboutBox.copyrightSectionTitle": "Aviso",
  "orionApplication.aboutBox.copyrightWarning1": "Este programa de computador está protegido por leis de direitos autorais e tratados internacionais. A reprodução ou distribuição não autorizada deste programa ou qualquer parte deste pode resultar em graves punições civis e criminais.",
  "orionApplication.aboutBox.copyrightWarning2": "Copyright © {year} Cerner Corporation. Todos os direitos reservados. Contém informações confidenciais e/ou de propriedade da Cerner",
  "orionApplication.aboutBox.customInformation": "Para informações de {name}, acesse {url}",
  "orionApplication.aboutBox.dateOfManufactureIconLabel": "Data de fabricação",
  "orionApplication.aboutBox.licensing": "Para mais informações regulatórias e de licença de software livre e de código aberto, acesse {url}",
  "orionApplication.aboutBox.licensingSectionTitle": "Informações regulatórias e de licença",
  "orionApplication.aboutBox.manufacturerIconLabel": "Fabricante",
  "orionApplication.aboutBox.patentInformation": "Para informações dos pacientes, acesse {url}",
  "orionApplication.aboutBox.patentInformationSectionTitle": "Informações do paciente",
  "orionApplication.aboutBox.version": "Versão: {version}",
  "orionApplication.applicationNavigation.aboutApplicationLink": "Sobre {applicationName}",
  "orionApplication.applicationNavigation.applicationHelpLink": "Ajuda de {applicationName}",
  "orionApplication.applicationNavigation.lockSessionUtilityItem": "Bloquear",
  "orionApplication.applicationNavigation.securitySettingsUtilityItem": "Configurações de segurança",
  "orionApplication.applicationNavigation.utilityMenu.help": "Ajuda",
  "orionApplication.helpMenu.title": "Opções de ajuda e informações da versão",
  "orionApplication.sessionError.message": "{applicationName} falhou ao recuperar os detalhes da sessão.",
  "orionApplication.sessionError.retry": "Tentar novamente",
  "partogram-engine.abortions": "Abortos",
  "partogram-engine.additonalBabyInfo": "Informações adicionais",
  "partogram-engine.babyInformation": "Ruptura da membrana",
  "partogram-engine.bad-request": "Parâmetros incorretos",
  "partogram-engine.blood-type": "Tipo sanguíneo",
  "partogram-engine.DAYS_ABBR": "d",
  "partogram-engine.DELIVERED": "Parto realizado",
  "partogram-engine.deliveryInformation": "Informações de parto",
  "partogram-engine.discontinued": "Descontinuado",
  "partogram-engine.DOB": "Data/hora de nascimento",
  "partogram-engine.duration": "Duração:",
  "partogram-engine.duration-exceeded": "A duração do intervalo de movimento excedeu 12 horas.",
  "partogram-engine.ectopic": "Ectópica",
  "partogram-engine.edd": "DPP",
  "partogram-engine.ega": "IGP",
  "partogram-engine.epidural": "Peridural",
  "partogram-engine.estimatedGestationalAge": "IGP no parto",
  "partogram-engine.fhr-failed-to-load": "Erro. Falha ao carregar.",
  "partogram-engine.field-not-configured": "O campo não está configurado",
  "partogram-engine.G": "G",
  "partogram-engine.gbs-status": "Status de GBS",
  "partogram-engine.gestational-information": "Informações da gestação",
  "partogram-engine.gravida": "Gestante",
  "partogram-engine.gravida-para": "Gestante/Nº de gravidez",
  "partogram-engine.heart-rate": "Faixa da frequência cardíaca do feto (bpm)",
  "partogram-engine.hours": "h",
  "partogram-engine.incorrect-config-message": "O filtro Iniciar partograma não foi configurado corretamente. Entre em contato com o administrador do sistema.",
  "partogram-engine.induced-abortion": "Aborto induzido",
  "partogram-engine.internal-server-error": "Erro de servidor interno",
  "partogram-engine.invalid-result-charted": "Documente um resultado válido para <nome de exibição do evento clínico> para iniciar o partograma.",
  "partogram-engine.labor-onset": "Início do parto",
  "partogram-engine.living": "Crianças vivas",
  "partogram-engine.meows": "MEWS",
  "partogram-engine.minutes": "m",
  "partogram-engine.multipara": "Multipara",
  "partogram-engine.multiple-birth-preg": "Gestações multíparas",
  "partogram-engine.multiple-epidural": "Há mais de um início da peridural.",
  "partogram-engine.N": "N",
  "partogram-engine.NEG": "NEG",
  "partogram-engine.NEGATIVE": "NEGATIVO",
  "partogram-engine.no-partogram": "Indisponível.",
  "partogram-engine.no-partogram-start-charted-message": "Documente um resultado válido para iniciar o partograma.",
  "partogram-engine.no-partogram-start-charted-title": "Partograma não iniciado",
  "partogram-engine.no-preg-message": "Este paciente não tem uma gravidez ativa.",
  "partogram-engine.no-results-found": "Nenhum resultado encontrado",
  "partogram-engine.nullipara": "Nullipara",
  "partogram-engine.oxytocin": "Ocitocina",
  "partogram-engine.P": "P",
  "partogram-engine.para-full-term": "Gestação a termo",
  "partogram-engine.para-pre-term": "Gestação pré-termo",
  "partogram-engine.parity-abbr": "P",
  "partogram-engine.parto-overview-header": "Visão geral do partograma",
  "partogram-engine.partogram": "Êxito.",
  "partogram-engine.partogram-failed-to-load": "Erro. Falha ao carregar.",
  "partogram-engine.patient-not-female": "Informações do partograma não são aplicáveis.",
  "partogram-engine.POS": "POS",
  "partogram-engine.POSITIVE": "POSITIVO",
  "partogram-engine.preg-data-error": "Erro ao recuperar dados da gestação.",
  "partogram-engine.pregnancy-descriptor": "Descritor de gravidez",
  "partogram-engine.pregnancy-unknown": "Pelo menos um histórico de gestação com um resultado desconhecido está documentado para a paciente. Verifique se todas as gestações estão documentadas corretamente para garantir que a paridade seja exibida corretamente.",
  "partogram-engine.prev_C_Section": "Seção C anterior",
  "partogram-engine.ROM": "Intervalo de movimento:",
  "partogram-engine.romStart": "Data/hora do intervalo de movimento:",
  "partogram-engine.spontaneous-abortion": "Aborto espontâneo",
  "partogram-engine.start": "Início",
  "partogram-engine.start-partogram": "Iniciar partograma",
  "partogram-engine.start-time": "Hora de início",
  "partogram-engine.StartDateTime": "Data/hora de início",
  "partogram-engine.stop": "Parada:",
  "partogram-engine.stop-time": "Hora de término",
  "partogram-engine.StopDateTime": "Data/hora de parada",
  "partogram-engine.unauthorized": "Solicitação não autorizada",
  "partogram-engine.WEEKS_ABBR": "s",
  "Stella.Timeline.allFieldsRequiredErrorText": "Todos os campos são obrigatórios.",
  "Stella.Timeline.Button.Disabled": "{button} desativado",
  "Stella.Timeline.cancelButtonText": "Cancelar",
  "Stella.Timeline.DatePopupDisplay12": "D[ de ]MMM[ de ]YYYY hh:mm A",
  "Stella.Timeline.DatePopupDisplay24": "D[ de ]MMM[ de ]YYYY HH:mm",
  "Stella.Timeline.dateRange": "Vendo conteúdo de {startDate} até {endDate}.",
  "Stella.Timeline.dateTimeText": "Data e hora",
  "Stella.Timeline.DaylightSavingsTime": "Horário de verão",
  "Stella.Timeline.DST": "Horário de verão",
  "Stella.Timeline.ER": "dddd-dddd",
  "Stella.Timeline.eR": "ddd-ddd",
  "Stella.Timeline.eT": "ddd HH:mm",
  "Stella.Timeline.Interval": "Intervalo",
  "Stella.Timeline.invalidEntryText": "Entrada inválida.",
  "Stella.Timeline.LastLoadLabel": "Último carregamento",
  "Stella.Timeline.LowerBarDesc": "Barra da linha de tempo inferior",
  "Stella.Timeline.mD": "D[ de ]MMM",
  "Stella.Timeline.mDR": "D[ de ]MMM-D[ de ]MMM",
  "Stella.Timeline.mDY": "D[ de ]MMM[ de ]YYYY",
  "Stella.Timeline.MDY": "D[ de ]MMMM[ de ]YYYY",
  "Stella.Timeline.mDYR": "D[ de ]MMM-D[ de ]MMM[ de ]YYYY",
  "Stella.Timeline.MDYR": "D[ de ]MMMM-D[ de ]MMMM[ de ]YYYY",
  "Stella.Timeline.MY": "MMM[ de ]YYYY",
  "Stella.Timeline.mY": "MMM[ de ]YYYY",
  "Stella.Timeline.NA": " ",
  "Stella.Timeline.requiredFieldText": "Os campos obrigatórios são marcados com um asterisco.",
  "Stella.Timeline.returnButtonText": "Retornar",
  "Stella.Timeline.returnLabel": "Voltar para a visualização inicial",
  "Stella.Timeline.selectDateTime": "Selecionar data e hora",
  "Stella.Timeline.SelectedDateTimeLabel": "Data e hora selecionada",
  "Stella.Timeline.SelectViewDropDown": "Menu de seleção de visualização. Valor atual {currentView}. Valor mínimo {minView}. Valor máximo {maxView}.",
  "Stella.Timeline.Step.DAY_1": "1 dia",
  "Stella.Timeline.Step.DAYS_10": "10 dias",
  "Stella.Timeline.Step.DAYS_15": "15 dias",
  "Stella.Timeline.Step.DAYS_16": "16 dias",
  "Stella.Timeline.Step.DAYS_180": "180 dias",
  "Stella.Timeline.Step.DAYS_2": "2 dias",
  "Stella.Timeline.Step.DAYS_20": "20 dias",
  "Stella.Timeline.Step.DAYS_3": "3 dias",
  "Stella.Timeline.Step.DAYS_30": "30 dias",
  "Stella.Timeline.Step.DAYS_4": "4 dias",
  "Stella.Timeline.Step.DAYS_45": "45 dias",
  "Stella.Timeline.Step.DAYS_5": "5 dias",
  "Stella.Timeline.Step.DAYS_60": "60 dias",
  "Stella.Timeline.Step.DAYS_8": "8 dias",
  "Stella.Timeline.Step.DAYS_90": "90 dias",
  "Stella.Timeline.Step.HOUR_1": "1 hora",
  "Stella.Timeline.Step.HOURS_12": "12 horas",
  "Stella.Timeline.Step.HOURS_2": "2 horas",
  "Stella.Timeline.Step.HOURS_24": "24 horas",
  "Stella.Timeline.Step.HOURS_3": "3 horas",
  "Stella.Timeline.Step.HOURS_4": "4 horas",
  "Stella.Timeline.Step.HOURS_48": "48 horas",
  "Stella.Timeline.Step.HOURS_6": "6 horas",
  "Stella.Timeline.Step.HOURS_8": "8 horas",
  "Stella.Timeline.Step.Info.DAY_1": "Intervalos de 1 dia",
  "Stella.Timeline.Step.Info.DAYS_10": "Intervalos de 10 dias",
  "Stella.Timeline.Step.Info.DAYS_15": "Intervalos de 15 dias",
  "Stella.Timeline.Step.Info.DAYS_16": "Intervalos de 16 dias",
  "Stella.Timeline.Step.Info.DAYS_180": "Intervalos de 180 dias",
  "Stella.Timeline.Step.Info.DAYS_2": "Intervalos de 2 dias",
  "Stella.Timeline.Step.Info.DAYS_20": "Intervalos de 20 dias",
  "Stella.Timeline.Step.Info.DAYS_3": "Intervalos de 3 dias",
  "Stella.Timeline.Step.Info.DAYS_30": "Intervalos de 30 dias",
  "Stella.Timeline.Step.Info.DAYS_4": "Intervalos de 4 dias",
  "Stella.Timeline.Step.Info.DAYS_45": "Intervalos de 45 dias",
  "Stella.Timeline.Step.Info.DAYS_5": "Intervalos de 5 dias",
  "Stella.Timeline.Step.Info.DAYS_60": "Intervalos de 60 dias",
  "Stella.Timeline.Step.Info.DAYS_8": "Intervalos de 8 dias",
  "Stella.Timeline.Step.Info.DAYS_90": "Intervalos de 90 dias",
  "Stella.Timeline.Step.Info.HOUR_1": "Intervalos de 1 hora",
  "Stella.Timeline.Step.Info.HOURS_12": "Intervalos de 12 horas",
  "Stella.Timeline.Step.Info.HOURS_2": "Intervalos de 2 horas",
  "Stella.Timeline.Step.Info.HOURS_24": "Intervalos de 24 horas",
  "Stella.Timeline.Step.Info.HOURS_3": "Intervalos de 3 horas",
  "Stella.Timeline.Step.Info.HOURS_4": "Intervalos de 4 horas",
  "Stella.Timeline.Step.Info.HOURS_48": "Intervalos de 48 horas",
  "Stella.Timeline.Step.Info.HOURS_6": "Intervalos de 6 horas",
  "Stella.Timeline.Step.Info.HOURS_8": "Intervalos de 8 horas",
  "Stella.Timeline.Step.Info.MINUTE_1": "Intervalos de 1 minuto",
  "Stella.Timeline.Step.Info.MINUTES_10": "Intervalos de 10 minutos",
  "Stella.Timeline.Step.Info.MINUTES_12": "Intervalos de 12 minutos",
  "Stella.Timeline.Step.Info.MINUTES_15": "Intervalos de 15 minutos",
  "Stella.Timeline.Step.Info.MINUTES_18": "Intervalos de 18 minutos",
  "Stella.Timeline.Step.Info.MINUTES_2": "Intervalos de 2 minutos",
  "Stella.Timeline.Step.Info.MINUTES_20": "Intervalos de 20 minutos",
  "Stella.Timeline.Step.Info.MINUTES_3": "Intervalos de 3 minutos",
  "Stella.Timeline.Step.Info.MINUTES_30": "Intervalos de 30 minutos",
  "Stella.Timeline.Step.Info.MINUTES_40": "Intervalos de 40 minutos",
  "Stella.Timeline.Step.Info.MINUTES_45": "Intervalos de 45 minutos",
  "Stella.Timeline.Step.Info.MINUTES_5": "Intervalos de 5 minutos",
  "Stella.Timeline.Step.Info.MINUTES_6": "Intervalos de 6 minutos",
  "Stella.Timeline.Step.Info.MINUTES_60": "Intervalos de 60 minutos",
  "Stella.Timeline.Step.Info.MINUTES_9": "Intervalos de 9 minutos",
  "Stella.Timeline.Step.Info.MINUTES_90": "Intervalos de 90 minutos",
  "Stella.Timeline.Step.Info.MONTH_1": "Intervalos de 1 mês",
  "Stella.Timeline.Step.Info.MONTHS_18": "Intervalos de 18 meses",
  "Stella.Timeline.Step.Info.MONTHS_2": "Intervalos de 2 meses",
  "Stella.Timeline.Step.Info.MONTHS_3": "Intervalos de 3 meses",
  "Stella.Timeline.Step.Info.MONTHS_4": "Intervalos de 4 meses",
  "Stella.Timeline.Step.Info.MONTHS_6": "Intervalos de 6 meses",
  "Stella.Timeline.Step.Info.MONTHS_9": "Intervalos de 9 meses",
  "Stella.Timeline.Step.Info.YEAR_1": "Intervalos de 1 ano",
  "Stella.Timeline.Step.Info.YEARS_2": "Intervalos de 2 anos",
  "Stella.Timeline.Step.Info.YEARS_4": "Intervalos de 4 anos",
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
  "Stella.Timeline.Step.MONTH_1": "1 mês",
  "Stella.Timeline.Step.MONTHS_18": "18 meses",
  "Stella.Timeline.Step.MONTHS_2": "2 meses",
  "Stella.Timeline.Step.MONTHS_3": "3 meses",
  "Stella.Timeline.Step.MONTHS_4": "4 meses",
  "Stella.Timeline.Step.MONTHS_6": "6 meses",
  "Stella.Timeline.Step.MONTHS_9": "9 meses",
  "Stella.Timeline.Step.YEAR_1": "1 ano",
  "Stella.Timeline.Step.YEARS_2": "2 anos",
  "Stella.Timeline.Step.YEARS_4": "4 anos",
  "Stella.Timeline.submitButtonText": "Enviar",
  "Stella.Timeline.T": "HH:mm",
  "Stella.Timeline.Timeframe": "Período",
  "Stella.Timeline.TR": "HH:mm-HH:mm",
  "Stella.Timeline.UpperBarDesc": "Barra da linha de tempo superior",
  "Stella.Timeline.View.DAYS_16": "16 dias",
  "Stella.Timeline.View.DAYS_180": "180 dias",
  "Stella.Timeline.View.DAYS_30": "30 dias",
  "Stella.Timeline.View.DAYS_60": "60 dias",
  "Stella.Timeline.View.DAYS_8": "8 dias",
  "Stella.Timeline.View.DAYS_90": "90 dias",
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
  "Stella.Timeline.View.YEARS_4": "4 anos",
  "Stella.Timeline.viewLabel": "Visualizar",
  "Stella.Timeline.viewNext": "Visualizar {step} seguinte à visualização atual",
  "Stella.Timeline.viewPrevious": "Visualizar {step} anterior à visualização atual",
  "Stella.Timeline.widthErrorMessage": "Gire o seu dispositivo móvel ou redimensione a janela para visualizar o componente. É necessário ter largura mínima de 284 pixels.",
  "Stella.Timeline.Y": "YYYY",
  "Stella.Timeline.Zoom.In": "Ampliar",
  "Stella.Timeline.Zoom.In.Step": "Aumentar intervalo {step} {viewType}",
  "Stella.Timeline.Zoom.Out": "Reduzir",
  "Stella.Timeline.Zoom.Out.Step": "Reduzir intervalo {step} {viewType}",
  "Terra.AbstractModal.BeginModalDialog": "Iniciar diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Caixa de diálogo modal final",
  "Terra.actionHeader.back": "Voltar",
  "Terra.actionHeader.close": "Fechar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Próximo",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.alert.advisory": "Informe.",
  "Terra.alert.alert": "Alerta.",
  "Terra.alert.dismiss": "Ignorar",
  "Terra.alert.error": "Erro.",
  "Terra.alert.info": "Informações.",
  "Terra.alert.success": "Êxito.",
  "Terra.alert.warning": "Aviso.",
  "Terra.application.tabs.more": "Mais",
  "Terra.application.utility.back": "Voltar",
  "Terra.application.utility.button": "Opções do usuário",
  "Terra.application.utility.close": "Fechar",
  "Terra.application.utility.menu": "Menu utilidade",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Pular para conteúdo",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Alternar menu",
  "Terra.applicationLayout.utilityDefaults.about": "Sobre",
  "Terra.applicationLayout.utilityDefaults.appearance": "Aparência",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Alterar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Primeiros passos",
  "Terra.applicationLayout.utilityDefaults.help": "Ajuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logoff",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Segurança",
  "Terra.applicationLayout.utilityDefaults.settings": "Configurações",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Termos de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informações do usuário",
  "Terra.applicationNavigation.drawerMenu.navigation": "Itens de navegação",
  "Terra.applicationNavigation.drawerMenu.utilities": "Itens de utilitários",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Pular para conteúdo",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opções",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Configurações do usuário",
  "Terra.applicationNavigation.notifications.new": "Novo",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Mais navegação",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Mais",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Mais navegação",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilitários",
  "Terra.applicationNavigation.utilityMenu.help": "Ajuda",
  "Terra.applicationNavigation.utilityMenu.logout": "Logoff",
  "Terra.applicationNavigation.utilityMenu.settings": "Configurações",
  "Terra.collapsibleMenuView.more": "Mais",
  "Terra.datePicker.calendarInstructions": "Para alterar a seleção, use as teclas de seta. Pressione Enter para selecionar uma data. Pressione Esc para fechar o pop-up do seletor de datas.",
  "Terra.datePicker.closeCalendar": "Fechar",
  "Terra.datePicker.date": "Data",
  "Terra.datePicker.dateFormat": "DD/MM/AAAA",
  "Terra.datePicker.disabled": "Desativado",
  "Terra.datePicker.monthLabel": "Mês",
  "Terra.datePicker.nextMonth": "Mês seguinte",
  "Terra.datePicker.openCalendar": "Calendário aberto",
  "Terra.datePicker.previousMonth": "Mês anterior",
  "Terra.datePicker.today": "Hoje",
  "Terra.datePicker.yearLabel": "Ano",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Antes (horário de verão)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Depois (horário padrão)",
  "Terra.dateTimePicker.timeClarification.message": "A hora selecionada ocorre durante a transição do horário de verão para o horário padrão. Gostaria de inserir um horário anterior ou posterior ao selecionado?",
  "Terra.dateTimePicker.timeClarification.title": "Explicação sobre o horário",
  "Terra.devSite.themed.help": "Ajuda",
  "Terra.dropdownButton.moreOptions": "Mais opções",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.field.required": "Obrigatório",
  "Terra.form.select.add": "Adicionar \"{text}\"",
  "Terra.form.select.ariaLabel": "Pesquisar",
  "Terra.form.select.clearSelect": "Limpar seleção",
  "Terra.form.select.defaultDisplay": "- Selecione -",
  "Terra.form.select.defaultUsageGuidance": "Use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.",
  "Terra.form.select.dimmed": "Esmaecido.",
  "Terra.form.select.disabled": "Desativado.",
  "Terra.form.select.listOfTotalOptions": "Lista de {total} opções.",
  "Terra.form.select.maxSelectionHelp": "Limite de itens de {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de itens de {text} selecionado",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Toque a tela para navegar para as opções.",
  "Terra.form.select.mobileUsageGuidance": "Deslize para a direita para acessar as opções.",
  "Terra.form.select.multiSelectUsageGuidance": "Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar ou cancelar a seleção de uma opção.",
  "Terra.form.select.noResults": "Não há resultados para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opções",
  "Terra.form.select.searchUsageGuidance": "Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.",
  "Terra.form.select.selectCleared": "Selecionar valor limpo",
  "Terra.form.select.selected": "Selecionado.",
  "Terra.form.select.selectedText": "{text} selecionado.",
  "Terra.form.select.unselected": "Não selecionado.",
  "Terra.form.select.unselectedText": "{text} não selecionado.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Instruções eletrônicas para ícone de uso",
  "Terra.InfiniteList.loading": "Carregando...",
  "Terra.menu.back": "Voltar",
  "Terra.menu.close": "Fechar",
  "Terra.navigation.side.menu.selected": "Selecionado",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Erro",
  "Terra.notification.dialog.info": "Informações",
  "Terra.notification.dialog.success": "Êxito",
  "Terra.notification.dialog.warning": "Advertência",
  "Terra.Overlay.loading": "Carregando...",
  "Terra.popup.header.close": "Fechar",
  "Terra.searchField.clear": "Limpar",
  "Terra.searchField.search": "Pesquisar",
  "Terra.searchField.submit-search": "Enviar pesquisa",
  "Terra.status-view.error": "Erro",
  "Terra.status-view.no-data": "Sem resultados",
  "Terra.status-view.no-matching-results": "Não há resultados correspondentes",
  "Terra.status-view.not-authorized": "Não autorizado",
  "Terra.timeInput.am": "",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.seconds": "Segundos",
  "Terra.timeInput.ss": "s",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Não salvar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Os seguintes itens contém alterações não salvas:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "As alterações serão descartadas se não forem salvas. Como deseja proceder?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Há alterações não salvas no {promptDescription}. As alterações serão descartadas se não forem salvas. Como deseja proceder?",
  "terraApplication.unsavedChangesPrompt.title": "Há alterações não salvas."
};
var areTranslationsLoaded = true;
var locale = 'pt';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;