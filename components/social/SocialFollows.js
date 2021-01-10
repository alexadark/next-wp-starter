import { HStack } from "@chakra-ui/react"
import {
  FaBehance,
  FaCodepen,
  FaDev,
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaMastodon,
  FaMedium,
  FaPinterest,
  FaReddit,
  FaSlack,
  FaSlideshare,
  FaSnapchat,
  FaSoundcloud,
  FaStackOverflow,
  FaTelegram,
  FaTumblr,
  FaTwitter,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa"

export const SocialFollows = ({ socialLinks = [], ...props }) => {
  const supportedIcons = [
    "behance",
    "codepen",
    "dev",
    "discord",
    "dribbble",
    "facebook",
    "github",
    "gitlab",
    "instagram",
    "linkedin",
    "mastodon",
    "medium",
    "pinterest",
    "reddit",
    "slack",
    "slideshare",
    "snapchat",
    "soundcloud",
    "stackoverflow",
    "telegram",
    "tumblr",
    "twitter",
    "vimeo",
    "youtube",
  ]
  const components = [
    FaBehance,
    FaCodepen,
    FaDev,
    FaDiscord,
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaLinkedin,
    FaMastodon,
    FaMedium,
    FaPinterest,
    FaReddit,
    FaSlack,
    FaSlideshare,
    FaSnapchat,
    FaSoundcloud,
    FaStackOverflow,
    FaTelegram,
    FaTumblr,
    FaTwitter,
    FaVimeo,
    FaYoutube,
  ]

  return (
    <HStack
      spacing={5}
      justify="center"
      className="widget widget-socialFollow"
      {...props}
    >
      {socialLinks?.map(({ iconName, iconUrl }) => {
        const index = supportedIcons.indexOf(iconName.toLowerCase())
        if (index > -1) {
          const Component = components[index]
          return (
            <a
              key={iconName}
              href={iconUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on ${iconName}`}
            >
              {<Component />}
            </a>
          )
        } else {
          return null
        }
      })}
    </HStack>
  )
}
