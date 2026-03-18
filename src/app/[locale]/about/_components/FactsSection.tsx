import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import {
  FiBook,
  FiBriefcase,
  FiCode,
  FiFeather,
  FiGlobe,
  FiLayout,
  FiMap,
  FiMusic,
  FiUsers,
} from 'react-icons/fi'
import { FaHeartCircleBolt, FaQuoteRight } from 'react-icons/fa6'
import Label from '@/components/ui/Label'
import { TbRun, TbTargetArrow } from 'react-icons/tb'
import { MdOutlineTranslate } from 'react-icons/md'
import { RiNextjsLine } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { LuBrain } from 'react-icons/lu'
import { FaMapMarkerAlt, FaTools, FaUser } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function FactsSection() {
  const t = useTranslations('Pages.About.Facts')

  return (
    <section className="flex items-center">
      <Container
        size="lg"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
      >
        <Card className="sm:col-span-2">
          <Icon Icon={FaUser} size={40} />
          <h3 className="text-xl font-semibold mt-3">{t('nameAndAge')}</h3>
        </Card>
        <Card>
          <Icon Icon={FaMapMarkerAlt} size={40} />
          <h3 className="text-xl font-semibold mt-3">{t('location')}</h3>
        </Card>
        <Card className="sm:col-span-2">
          <Icon Icon={FaTools} size={40} />
          <h3 className="text-xl font-semibold mt-3">{t('skills.title')}</h3>
          <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
            <Label Icon={FiCode} text={t('skills.programming')} />
            <Label Icon={RiNextjsLine} text={t('skills.webDevelopment')} />
            <Label Icon={FiLayout} text={t('skills.uiuxDesign')} />
            <Label Icon={FiBriefcase} text={t('skills.projectManagement')} />
          </div>
        </Card>
        <Card>
          <Icon Icon={BsStars} size={40} />
          <h3 className="text-xl font-semibold mt-3">
            {t('personality.title')}
          </h3>
          <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
            <Label Icon={FiFeather} text={t('personality.calm')} />
            <Label Icon={LuBrain} text={t('personality.serious')} />
            <Label Icon={FiUsers} text={t('personality.sociable')} />
          </div>
        </Card>
        <Card>
          <Icon Icon={MdOutlineTranslate} size={40} />
          <h3 className="text-xl font-semibold mt-3">{t('languages.title')}</h3>
          <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
            <Label Icon={FiGlobe} text={t('languages.FR')} />
            <Label Icon={FiGlobe} text={t('languages.EN')} />
          </div>
        </Card>
        <Card className="sm:col-span-2">
          <Icon Icon={FaHeartCircleBolt} size={40} />
          <h3 className="text-xl font-semibold mt-3">{t('passions.title')}</h3>
          <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
            <Label Icon={FiCode} text={t('passions.tech')} />
            <Label Icon={FiBriefcase} text={t('passions.entrepreneurship')} />
            <Label Icon={FiBook} text={t('passions.personalDevelopment')} />
            <Label Icon={FiMap} text={t('passions.adventuresAndTravels')} />
            <Label Icon={TbRun} text={t('passions.sport')} />
            <Label Icon={FiMusic} text={t('passions.music')} />
          </div>
        </Card>
      </Container>
    </section>
  )
}
