import Seo from '../components/Seo'
import AnimatedPageHeader from '../components/AnimatedPageHeader'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'

const sections = [
  {
    label: 'Information We Collect',
    body: 'We collect information you provide directly, including your name, email address, phone number, and project details when you submit our contact form or subscribe to our newsletter.',
  },
  {
    label: 'How We Use Your Information',
    body: 'Your information is used solely to respond to your inquiries, provide advisory services, and send occasional updates if you have opted in. We do not sell or share your personal information with third parties for marketing purposes.',
  },
  {
    label: 'Cookies & Analytics',
    body: 'Our website may use minimal analytics to understand visitor behavior. We do not use advertising cookies or tracking pixels. Any analytics data is anonymized and used only to improve the website experience.',
  },
  {
    label: 'Third-Party Services',
    body: 'Contact form submissions are processed through Formspree. Newsletter signups may be managed through a third-party email service. These services have their own privacy policies governing data handling.',
  },
  {
    label: 'Data Retention',
    body: 'We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.',
  },
  {
    label: 'Your Rights',
    body: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@mahaattie.com.',
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy & Legal"
        description="Privacy policy and legal information for mahaattie.com."
        path="/privacy"
      />

      <AnimatedPageHeader eyebrow="Legal" headline="Privacy & Legal." />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[680px] px-6">
          {sections.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="mb-12">
              <Eyebrow>{s.label}</Eyebrow>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}

          {/* Contact */}
          <Reveal delay={sections.length * 0.06} className="mb-12">
            <Eyebrow>Contact</Eyebrow>
            <p className="mt-3 leading-relaxed text-muted">
              For questions about this privacy policy, contact:{' '}
              <a
                href="mailto:hello@mahaattie.com"
                className="text-bronze transition-colors hover:text-bronze-dk"
              >
                hello@mahaattie.com
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
