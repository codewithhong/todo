import * as DialogPrimitive from '@radix-ui/react-dialog'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth } from '@/lib/firebase/app'

import Spinner from '../Spinner'

type AuthModalProps = {
  open: boolean
}

const AuthModal = (props: AuthModalProps) => {
  const { open } = props
  const [signInWithGoogle, _, loading] = useSignInWithGoogle(auth)

  return (
    <DialogPrimitive.Root open={open}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className='animate-in fade-in fixed inset-0 z-40 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity' />
        <DialogPrimitive.Content className='fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent-2 bg-hong-bg p-4 focus:outline-none'>
          <div className='my-12 flex flex-col items-center justify-center gap-4'>
            <div className='text-xl font-bold'>Sign in</div>
            <button
              type='button'
              className='flex w-56 items-center justify-center gap-2 rounded-lg border border-accent-2 px-4 py-2 transition-colors duration-300 hover:border-white'
              onClick={() => signInWithGoogle()}
              disabled={loading}
            >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <IconBrandGoogle />
                  <div>Sign in with Google</div>
                </>
              )}
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
export default AuthModal
