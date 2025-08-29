import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiInstagram,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
  SiNetlify,
  SiNginx,
  SiVercel,
  SiRender

} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads ,FaAws } from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  instagram: SiInstagram,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  react: SiReact,
  nodeJs: SiNodedotjs,
  html5:SiHtml5,
  css3:SiCss3,
  express :SiExpress,
  bootstrap:SiBootstrap,
  tailwindCss:SiTailwindcss,
  mongodb:SiMongodb,
  mySql:SiMysql,
  git:SiGit,
  postman:SiPostman,
  vscode:VscVscode,
  aws:FaAws,
  netlify:SiNetlify,
  nginx:SiNginx,
  vercel:SiVercel,
  render:SiRender
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
