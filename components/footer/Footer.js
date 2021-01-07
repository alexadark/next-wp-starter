import {
  chakra,
  useColorModeValue as colorMode,
  HStack,
} from "@chakra-ui/react"
import { SocialFollows } from "@/components/social"

export const Footer = ({ footerData }) => {
  const { copyrightText, socialLinks } = footerData
  return (
    <chakra.footer
      bg={colorMode("footerBg", "modes.dark.footerBg")}
      color={colorMode("footerColor", "modes.dark.footerColor")}
      className="shadow-md py-7"
    >
      <div className="container mx-auto text-center">
        <div>
          © {new Date().getFullYear()} {copyrightText}
        </div>
        <SocialFollows socialLinks={socialLinks} />
      </div>
    </chakra.footer>
  )
}
