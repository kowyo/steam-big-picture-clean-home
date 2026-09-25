# Clean Big Picture Home

A small [Millennium](https://github.com/SteamClientHomebrew/Millennium) theme for Steam on Windows. It hides these two rows from the Big Picture home screen:

- **Recently updated on this device**
- **Trending among friends**

The **Special Offers** row remains visible. The theme also hides the desktop Library **What's New** shelf and Steam News button, preserving the behavior of [no more whats new](https://steambrew.app/theme/ravniuH9rc1gfE62sDdD).

## Install

1. Install Millennium if it is not already installed.
2. Copy this repository into `<Steam install directory>/millennium/themes/clean-big-picture-home`.
3. In Steam, open **Steam → Millennium → Themes** and choose **Clean Big Picture Home**.
4. Restart Steam when prompted.

The theme only changes what Steam displays. It does not remove game data, updates, or store data. To undo it, choose another theme in Millennium.

## Compatibility

Verified on Steam for Windows on September 25, 2026. Steam uses generated CSS class names, so a Steam update may require changes to `bigpicture.custom.css` and `bigpicture.custom.js`. The friends row title list comes from Steam's localization files on that date.

## 中文说明

此主题隐藏 Steam 大屏幕模式首页的“此设备上最近更新”和“好友间人气蹿升”两栏，保留“特别优惠”。它也延续桌面版游戏库中隐藏“What’s New”的效果。安装后在 **Steam → Millennium → Themes** 选择此主题，并按提示重启 Steam。

## Credits

The desktop Library selectors are adapted from [no more whats new](https://github.com/lil-fluff/no-more-whats-new), which is released under the Unlicense. This repository is also released under the Unlicense.
