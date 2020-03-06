const Main             = imports.ui.main
const Unite            = imports.misc.extensionUtils.getCurrentExtension()
const ActivateWindow   = Unite.imports.modules.activateWindow.ActivateWindow
const ExtendLeftBox    = Unite.imports.modules.extendLeftBox.ExtendLeftBox
const DesktopName      = Unite.imports.modules.desktopName.DesktopName
const MessageTray      = Unite.imports.modules.messageTray.MessageTray
const ActivitiesButton = Unite.imports.modules.activitiesButton.ActivitiesButton
const ApplicationMenu  = Unite.imports.modules.applicationMenu.ApplicationMenu
const WindowButtons    = Unite.imports.modules.windowButtons.WindowButtons
const WindowDecoration = Unite.imports.modules.windowDecoration.WindowDecoration
const TopIcons         = Unite.imports.modules.topIcons.TopIcons
const ThemeMods        = Unite.imports.modules.themeMods.ThemeMods

class UniteExtension {
  constructor() {
    this._activateWindow   = new ActivateWindow()
    this._extendLeftBox    = new ExtendLeftBox()
    this._desktopName      = new DesktopName()
    this._messageTray      = new MessageTray()
    this._activitiesButton = new ActivitiesButton()
    this._applicationMenu  = new ApplicationMenu()
    this._windowButtons    = new WindowButtons()
    this._windowDecoration = new WindowDecoration()
    this._topIcons         = new TopIcons()
    this._themeMods        = new ThemeMods()

    Main.panel._addStyleClassName('unite-shell')
  }

  destroy() {
    this._activateWindow.destroy()
    this._extendLeftBox.destroy()
    this._desktopName.destroy()
    this._messageTray.destroy()
    this._activitiesButton.destroy()
    this._applicationMenu.destroy()
    this._windowButtons.destroy()
    this._windowDecoration.destroy()
    this._topIcons.destroy()
    this._themeMods.destroy()

    Main.panel._removeStyleClassName('unite-shell')
  }
}

let uniteExtension

function enable() {
  uniteExtension = new UniteExtension()
}

function disable() {
  uniteExtension.destroy()
  uniteExtension = null
}
