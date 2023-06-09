/*******Panel Top**********/
paneltop = new Panel
paneltop.hiding = "windowscover"
paneltop.location = "top"
paneltop.height = 2 * Math.floor(gridUnit * 1.3 / 2)
paneltop.offset = 0;
;
/*kapple*/
paneltop.addWidget("org.kde.plasma.marginsseparator");
 paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kpple.kppleMenu");
   paneltop.addWidget("org.kde.windowbuttons");


   paneltop_napp = paneltop.addWidget("org.kde.activeApplication");
 paneltop_napp.currentConfigGroup = ["Appearance"];
  paneltop_napp.writeConfig("noWindowText", "Desktop");
paneltop.addWidget("org.kde.plasma.appmenu");
 paneltop.addWidget("org.kde.plasma.panelspacer");
paneltop_clock = paneltop.addWidget("org.kde.plasma.bigSur-inlineBattery");
 paneltop_clock.currentConfigGroup = ["General"];
  paneltop_clock.writeConfig("fontSize", "13");
   paneltop_clock.writeConfig("iconHeight", "12");
    paneltop_clock.writeConfig("iconWidth", "23");
     paneltop_clock.writeConfig("padding", "4");
      paneltop_clock.writeConfig("showPercentage", "false");
paneltop.addWidget("org.kde.plasma.marginsseparator");
 paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.systemtray");
paneltop.addWidget("org.kde.plasma.networkmanagement");
 paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
paneltop.addWidget("org.kde.plasma.notifications");
 paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
paneltop.addWidget("com.github.prayag2.controlcentre");
 paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
   paneltop.addWidget("org.kde.milou");
    paneltop.addWidget("org.kde.plasma.marginsseparator");
     paneltop.addWidget("org.kde.plasma.marginsseparator");
      paneltop_clock = paneltop.addWidget("com.marcinorlowski.htmlclock");
       paneltop_clock.currentConfigGroup = ["Appearance"];
        paneltop_clock.writeConfig("useUserLayout", "true");
         paneltop_clock.currentConfigGroup = ["Configuration/Appearance"];
          paneltop_clock.writeConfig("layout", '<html><body><center><span style="font-weight:500;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>');
           paneltop.addWidget("org.kde.plasma.marginsseparator");
            paneltop.addWidget("org.kde.plasma.marginsseparator");

    ;;
    ;;
panelbottom = new Panel
 panelbottom.location = "bottom"
  panelbottom.height = gridUnit * 3.7
   panelbottom.offset = 0;
    panelbottom.alignment = "center"
     panelbottom.panelVisibility = "2"
      panelbottom.maximumLength = 90 * Math.floor(gridUnit * 90 / 90)
       panelbottom.minimumLength = 12 * Math.floor(gridUnit * 12 / 12)
        panelbottom.hiding = "windowscover"
         panelbottom.addWidget("org.kde.plasma.marginsseparator")
          panelbottom_start = panelbottom.addWidget("P-Connor.PlasmaDrawer")
           panelbottom_start.currentConfigGroup = ["General"]
            panelbottom_start.writeConfig("customButtonImage", "launcher")
             panelbottom_start.writeConfig("useCustomButtonImage", "true")
   /*Tasks*/
    /*added icons apps*/
     /*filemanager*/
      if (applicationExists("org.kde.dolphin.desktop"))
          {
           var apps01 = "applications:org.kde.dolphin.desktop";
          }
      else{
           var apps01 = "";
          }
     /*web browser*/
          if (applicationExists("google-chrome.desktop"))
           var browser = `applications:google-chrome.desktop`;
     else{
         var browser = `applications:${defaultApplication("browser")}`;
    }


     /*discover*/
      if (applicationExists("pamac-installer.desktop"))
          {
           var apps02 = "applications:pamac-installer.desktop";
          }
      else{
           var apps02 = "";
          }
     /*gwenview*/
      if (applicationExists("code.desktop"))
          {
           var apps03 = `applications:code.desktop`;
          }
      else{
           var apps03 = `${apps02}`;
          }
      if (applicationExists('discord.desktop')){
          var app035 = 'applications:discord.desktop';
      }
      else {var app035 = '';}
     /*konsole*/
      if (applicationExists("org.kde.konsole.desktop"))
          {
           var apps04 = `${apps03},applications:org.kde.konsole.desktop`;
          }
      else{
           var apps04 = `${apps03}`;
          }
     /*settings*/
      if (applicationExists("systemsettings.desktop"))
          {
           var apps05 = `${apps04},applications:systemsettings.desktop`;
          }
      else{
           var apps05 = `${apps04}`;
          }
     /*text-editor*/
      if (applicationExists("org.kde.kate.desktop"))
          {
           var apps06 = `${apps05},applications:org.kde.kate.desktop`;
          }
      else{
            if (applicationExists("org.kde.kwrite.desktop"))
                 {
                  var apps06 = `${apps05},applications:org.kde.kwrite.desktop`;
                 }
             else{
                  var apps06 = `${apps05}`;
                 }
          }
     /*okular*/
      if (applicationExists("okularApplication_comicbook.desktop"))
          {
           var apps07 = `${apps06},applications:okularApplication_comicbook.desktop`;
          }
      else{
           var apps07 = `${apps06}`;
          }
           /*filemanager/*/
           /*icons dock /*/
  /*dock*/
     panelbottom_tsk = panelbottom.addWidget("org.kde.plasma.icontasks");
      panelbottom_tsk.currentConfigGroup = [];
       panelbottom_tsk.writeConfig("launchers", "");
        panelbottom_tsk.currentConfigGroup = ["General"];
         panelbottom_tsk.writeConfig("indicateAudioStreams", "false");
          panelbottom_tsk.writeConfig("launchers", `${apps01},${browser},${apps07}`);
           panelbottom_tsk.writeConfig("maxStripes", "1");
             /*dock/*/
    /*Trash*/
    panelbottom.addWidget("org.kde.latte.separator");
      panelbottom_fld = panelbottom.addWidget("org.kde.plasma.folder");
       panelbottom_fld.currentConfigGroup = ["General"];
        panelbottom_fld.writeConfig("url", `${userDataPath("downloads")}`);
    panelbottom.addWidget("org.kde.plasma.trash");
     /*separator*/
    panelbottom.addWidget("org.kde.plasma.marginsseparator");
     /*separator /*/
;
plasma.loadSerializedLayout(layout);


