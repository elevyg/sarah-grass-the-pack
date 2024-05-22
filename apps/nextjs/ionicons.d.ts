import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": IoniconElement;
    }
  }
}

type IoniconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & {
    name: Ionicons;
    class?: string;
    src?: string;
    size?: "small" | "large";
  },
  HTMLElement
>;

type Ionicons = `${IoniconsBase}${"-outline" | "-sharp" | ""}` | IoniconsLogo;

type IoniconsBase =
  | "accessibility"
  | "add"
  | "add-circle"
  | "airplane"
  | "alarm"
  | "albums"
  | "alert"
  | "alert-circle"
  | "american-football"
  | "analytics"
  | "aperture"
  | "apps"
  | "archive"
  | "arrow-back"
  | "arrow-back-circle"
  | "arrow-down"
  | "arrow-down-circle"
  | "arrow-forward"
  | "arrow-forward-circle"
  | "arrow-redo"
  | "arrow-redo-circle"
  | "arrow-undo"
  | "arrow-undo-circle"
  | "arrow-up"
  | "arrow-up-circle"
  | "at"
  | "at-circle"
  | "attach"
  | "backspace"
  | "bag"
  | "bag-add"
  | "bag-check"
  | "bag-handle"
  | "bag-remove"
  | "balloon"
  | "ban"
  | "bandage"
  | "bar-chart"
  | "barbell"
  | "barcode"
  | "baseball"
  | "basket"
  | "basketball"
  | "battery-charging"
  | "battery-dead"
  | "battery-full"
  | "battery-half"
  | "beaker"
  | "bed"
  | "beer"
  | "bicycle"
  | "bluetooth"
  | "boat"
  | "body"
  | "bonfire"
  | "book"
  | "bookmark"
  | "bookmarks"
  | "bowling-ball"
  | "briefcase"
  | "browsers"
  | "brush"
  | "bug"
  | "build"
  | "bulb"
  | "bus"
  | "business"
  | "cafe"
  | "calculator"
  | "calendar"
  | "calendar-clear"
  | "calendar-number"
  | "call"
  | "camera"
  | "camera-reverse"
  | "car"
  | "car-sport"
  | "card"
  | "caret-back"
  | "caret-back-circle"
  | "caret-down"
  | "caret-down-circle"
  | "caret-forward"
  | "caret-forward-circle"
  | "caret-up"
  | "caret-up-circle"
  | "cart"
  | "cash"
  | "cellular"
  | "chatbox"
  | "chatbox-ellipses"
  | "chatbubble"
  | "chatbubble-ellipses"
  | "chatbubbles"
  | "checkbox"
  | "checkmark"
  | "checkmark-circle"
  | "checkmark-done"
  | "checkmark-done-circle"
  | "chevron-back"
  | "chevron-back-circle"
  | "chevron-down"
  | "chevron-down-circle"
  | "chevron-forward"
  | "chevron-forward-circle"
  | "chevron-up"
  | "chevron-up-circle"
  | "clipboard"
  | "close"
  | "close-circle"
  | "cloud"
  | "cloud-circle"
  | "cloud-done"
  | "cloud-download"
  | "cloud-offline"
  | "cloud-upload"
  | "cloudy"
  | "cloudy-night"
  | "code"
  | "code-download"
  | "code-slash"
  | "code-working"
  | "cog"
  | "color-fill"
  | "color-filter"
  | "color-palette"
  | "color-wand"
  | "compass"
  | "construct"
  | "contract"
  | "contrast"
  | "copy"
  | "create"
  | "crop"
  | "cube"
  | "cut"
  | "desktop"
  | "diamond"
  | "dice"
  | "disc"
  | "document"
  | "document-attach"
  | "document-lock"
  | "document-text"
  | "documents"
  | "download"
  | "duplicate"
  | "ear"
  | "earth"
  | "easel"
  | "egg"
  | "ellipse"
  | "ellipsis-horizontal"
  | "ellipsis-horizontal-circle"
  | "ellipsis-vertical"
  | "ellipsis-vertical-circle"
  | "enter"
  | "exit"
  | "expand"
  | "extension-puzzle"
  | "eye"
  | "eye-off"
  | "eyedrop"
  | "fast-food"
  | "female"
  | "file-tray"
  | "file-tray-full"
  | "file-tray-stacked"
  | "film"
  | "filter"
  | "filter-circle"
  | "finger-print"
  | "fish"
  | "fitness"
  | "flag"
  | "flame"
  | "flash"
  | "flash-off"
  | "flashlight"
  | "flask"
  | "flower"
  | "folder"
  | "folder-open"
  | "football"
  | "footsteps"
  | "funnel"
  | "game-controller"
  | "gift"
  | "git-branch"
  | "git-commit"
  | "git-compare"
  | "git-merge"
  | "git-network"
  | "git-pull-request"
  | "glasses"
  | "globe"
  | "golf"
  | "grid"
  | "hammer"
  | "hand-left"
  | "hand-right"
  | "happy"
  | "hardware-chip"
  | "headset"
  | "heart"
  | "heart-circle"
  | "heart-dislike"
  | "heart-dislike-circle"
  | "heart-half"
  | "help"
  | "help-buoy"
  | "help-circle"
  | "home"
  | "hourglass"
  | "ice-cream"
  | "id-card"
  | "image"
  | "images"
  | "infinite"
  | "information"
  | "information-circle"
  | "invert-mode"
  | "journal"
  | "key"
  | "keypad"
  | "language"
  | "laptop"
  | "layers"
  | "leaf"
  | "library"
  | "link"
  | "list"
  | "list-circle"
  | "locate"
  | "location"
  | "lock-closed"
  | "lock-open"
  | "log-in"
  | "log-out"
  | "magnet"
  | "mail"
  | "mail-open"
  | "mail-unread"
  | "male"
  | "male-female"
  | "man"
  | "map"
  | "medal"
  | "medical"
  | "medkit"
  | "megaphone"
  | "menu"
  | "mic"
  | "mic-circle"
  | "mic-off"
  | "mic-off-circle"
  | "moon"
  | "move"
  | "musical-note"
  | "musical-notes"
  | "navigate"
  | "navigate-circle"
  | "newspaper"
  | "notifications"
  | "notifications-circle"
  | "notifications-off"
  | "notifications-off-circle"
  | "nuclear"
  | "nutrition"
  | "open"
  | "options"
  | "paper-plane"
  | "partly-sunny"
  | "pause"
  | "pause-circle"
  | "paw"
  | "pencil"
  | "people"
  | "people-circle"
  | "person"
  | "person-add"
  | "person-circle"
  | "person-remove"
  | "phone-landscape"
  | "phone-portrait"
  | "pie-chart"
  | "pin"
  | "pint"
  | "pizza"
  | "planet"
  | "play"
  | "play-back"
  | "play-back-circle"
  | "play-circle"
  | "play-forward"
  | "play-forward-circle"
  | "play-skip-back"
  | "play-skip-back-circle"
  | "play-skip-forward"
  | "play-skip-forward-circle"
  | "podium"
  | "power"
  | "pricetag"
  | "pricetags"
  | "print"
  | "prism"
  | "pulse"
  | "push"
  | "qr-code"
  | "radio"
  | "radio-button-off"
  | "radio-button-on"
  | "rainy"
  | "reader"
  | "receipt"
  | "recording"
  | "refresh"
  | "refresh-circle"
  | "reload"
  | "reload-circle"
  | "remove"
  | "remove-circle"
  | "reorder-four"
  | "reorder-three"
  | "reorder-two"
  | "repeat"
  | "resize"
  | "restaurant"
  | "return-down-back"
  | "return-down-forward"
  | "return-up-back"
  | "return-up-forward"
  | "ribbon"
  | "rocket"
  | "rose"
  | "sad"
  | "save"
  | "scale"
  | "scan"
  | "scan-circle"
  | "school"
  | "search"
  | "search-circle"
  | "send"
  | "server"
  | "settings"
  | "shapes"
  | "share"
  | "share-social"
  | "shield"
  | "shield-checkmark"
  | "shield-half"
  | "shirt"
  | "shuffle"
  | "skull"
  | "snow"
  | "sparkles"
  | "speedometer"
  | "square"
  | "star"
  | "star-half"
  | "stats-chart"
  | "stop"
  | "stop-circle"
  | "stopwatch"
  | "storefront"
  | "subway"
  | "sunny"
  | "swap-horizontal"
  | "swap-vertical"
  | "sync"
  | "sync-circle"
  | "tablet-landscape"
  | "tablet-portrait"
  | "telescope"
  | "tennisball"
  | "terminal"
  | "text"
  | "thermometer"
  | "thumbs-down"
  | "thumbs-up"
  | "thunderstorm"
  | "ticket"
  | "time"
  | "timer"
  | "today"
  | "toggle"
  | "trail-sign"
  | "train"
  | "transgender"
  | "trash"
  | "trash-bin"
  | "trending-down"
  | "trending-up"
  | "triangle"
  | "trophy"
  | "tv"
  | "umbrella"
  | "unlink"
  | "videocam"
  | "videocam-off"
  | "volume-high"
  | "volume-low"
  | "volume-medium"
  | "volume-mute"
  | "volume-off"
  | "walk"
  | "wallet"
  | "warning"
  | "watch"
  | "water"
  | "wifi"
  | "wine"
  | "woman";

type IoniconsLogo =
  | "logo-alipay"
  | "logo-amazon"
  | "logo-amplify"
  | "logo-android"
  | "logo-angular"
  | "logo-apple"
  | "logo-apple-appstore"
  | "logo-apple-ar"
  | "logo-behance"
  | "logo-bitbucket"
  | "logo-bitcoin"
  | "logo-buffer"
  | "logo-capacitor"
  | "logo-chrome"
  | "logo-closed-captioning"
  | "logo-codepen"
  | "logo-css3"
  | "logo-designernews"
  | "logo-deviantart"
  | "logo-discord"
  | "logo-docker"
  | "logo-dribbble"
  | "logo-dropbox"
  | "logo-edge"
  | "logo-electron"
  | "logo-euro"
  | "logo-facebook"
  | "logo-figma"
  | "logo-firebase"
  | "logo-firefox"
  | "logo-flickr"
  | "logo-foursquare"
  | "logo-github"
  | "logo-gitlab"
  | "logo-google"
  | "logo-google-playstore"
  | "logo-hackernews"
  | "logo-html5"
  | "logo-instagram"
  | "logo-ionic"
  | "logo-ionitron"
  | "logo-javascript"
  | "logo-laravel"
  | "logo-linkedin"
  | "logo-markdown"
  | "logo-mastodon"
  | "logo-medium"
  | "logo-microsoft"
  | "logo-no-smoking"
  | "logo-nodejs"
  | "logo-npm"
  | "logo-octocat"
  | "logo-paypal"
  | "logo-pinterest"
  | "logo-playstation"
  | "logo-pwa"
  | "logo-python"
  | "logo-react"
  | "logo-reddit"
  | "logo-rss"
  | "logo-sass"
  | "logo-skype"
  | "logo-slack"
  | "logo-snapchat"
  | "logo-soundcloud"
  | "logo-stackoverflow"
  | "logo-steam"
  | "logo-stencil"
  | "logo-tableau"
  | "logo-tiktok"
  | "logo-tumblr"
  | "logo-tux"
  | "logo-twitch"
  | "logo-twitter"
  | "logo-usd"
  | "logo-venmo"
  | "logo-vercel"
  | "logo-vimeo"
  | "logo-vk"
  | "logo-vue"
  | "logo-web-component"
  | "logo-wechat"
  | "logo-whatsapp"
  | "logo-windows"
  | "logo-wordpress"
  | "logo-xbox"
  | "logo-xing"
  | "logo-yahoo"
  | "logo-yen"
  | "logo-youtube";
