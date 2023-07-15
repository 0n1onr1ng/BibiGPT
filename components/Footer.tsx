import Link from 'next/link'
import { ModeToggle } from '~/components/mode-toggle'
import { Icons } from './icons'
import { buttonVariants } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="z-50 mt-5 mb-3 flex h-16 w-full flex-col items-center justify-between space-y-3 bg-white px-3 pt-4 text-center text-slate-400 sm:mb-0 sm:h-20 sm:flex-row sm:pt-2 lg:px-12">
      <div>
        了解{' '}
        <a
          href="https://hi.aixingzan.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline-offset-2 transition hover:text-pink-400 hover:underline"
        >
          星赞 AI{' '}
        </a>
        以及{' '}
        <a
          href="https://chat.aixingzan.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline-offset-2 transition hover:text-pink-400 hover:underline"
        >
          AI 提效管家.
        </a>
      </div>
      <div className="flex items-center space-x-1">
        <Link href="/privacy" className="group" aria-label="隐私声明">
          Privacy Statement
        </Link>
        <ModeToggle />
      </div>
    </footer>
  )
}
