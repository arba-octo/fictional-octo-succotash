import { Ref } from 'react';
import { signIn } from 'next-auth/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  modalRef: Ref<HTMLDialogElement>;
}

function ModalAuth({ modalRef }: Props) {
  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box max-w-sm">
        <form method="dialog">
          <button className="absolute right-2 top-2 btn btn-circle btn-ghost p-2">
            <XMarkIcon />
          </button>
        </form>
        <h2 className="font-bold text-lg text-center">Войдите в&nbsp;Ярми&nbsp;&mdash;<br />или зарегистрируйтесь</h2>
        <p className="py-4 text-center">
          Через Яндекс, Mail.Ru&nbsp;или VK&nbsp;&mdash; как удобно.
          <br />
          Так вы&nbsp;сможете использовать, все возможности платформы
        </p>
        <div className="mt-5 mb-5 grid gap-2">
          <button
            className="btn bg-white"
            onClick={() => signIn('yandex')}
          >
            <svg width="22" height="22" viewBox="2 2 20 20" fill="white">
              <path fill="#FC3F1D" d="M2.25 12c0-5.385 4.366-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" />
              <path fill="#fff" d="M13.249 7.774h-.901c-1.652 0-2.52.837-2.52 2.07 0 1.394.6 2.049 1.834 2.885l1.018.686-2.927 4.376H7.564l2.627-3.914c-1.512-1.084-2.36-2.135-2.36-3.915 0-2.23 1.556-3.754 4.505-3.754h2.928V17.78h-2.016z" />
            </svg>
            Войти через Яндекс
          </button>
          <button
            type="button"
            className="btn bg-white"
            onClick={() => signIn('mailru')}
          >
            <span className="text-[#07f]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.2559 10C12.2559 11.2439 11.2439 12.2559 10 12.2559C8.75607 12.2559 7.74411 11.2439 7.74411 10C7.74411 8.75607 8.75607 7.74411 10 7.74411C11.2439 7.74411 12.2559 8.75607 12.2559 10ZM10 2.5C5.86429 2.5 2.5 5.86429 2.5 10C2.5 14.1357 5.86429 17.5 10 17.5C11.515 17.5 12.9759 17.0489 14.2246 16.1955L14.2461 16.1805L13.2357 15.0062L13.2186 15.017C12.2575 15.6357 11.1443 15.9625 10 15.9625C6.71232 15.9625 4.0375 13.2877 4.0375 10C4.0375 6.71232 6.71232 4.0375 10 4.0375C13.2877 4.0375 15.9625 6.71232 15.9625 10C15.9625 10.4259 15.9148 10.8571 15.8221 11.2814C15.6336 12.0555 15.0914 12.2923 14.6848 12.2612C14.2755 12.228 13.7966 11.9366 13.7934 11.223V10.6793V10C13.7934 7.90804 12.092 6.20661 10 6.20661C7.90804 6.20661 6.20661 7.90804 6.20661 10C6.20661 12.092 7.90804 13.7934 10 13.7934C11.0162 13.7934 11.9693 13.3964 12.6877 12.6737C13.1055 13.3241 13.7864 13.7318 14.5616 13.7939C14.628 13.7993 14.6961 13.802 14.763 13.802C15.3089 13.802 15.8495 13.6193 16.2855 13.2887C16.735 12.947 17.0709 12.4536 17.2562 11.8605C17.2857 11.7646 17.3404 11.5439 17.3404 11.5439L17.342 11.5359C17.4513 11.0602 17.5 10.5861 17.5 10C17.5 5.86429 14.1357 2.5 10 2.5Z" fill="currentColor" />
              </svg>
            </span>
            Войти через Mail.Ru
          </button>
          <button
            type="button"
            className="btn bg-[#07f] text-white"
            onClick={() => signIn('vk')}
          >
            <svg width="20" height="22" viewBox="0 0 28 28" fill="white">
              <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28" style={{ maskType: 'alpha' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.96824 1.96824C0 3.93649 0 7.10432 0 13.44V14.56C0 20.8957 0 24.0635 1.96824 26.0318C3.93649 28 7.10432 28 13.44 28H14.56C20.8957 28 24.0635 28 26.0318 26.0318C28 24.0635 28 20.8957 28 14.56V13.44C28 7.10432 28 3.93649 26.0318 1.96824C24.0635 0 20.8957 0 14.56 0H13.44C7.10432 0 3.93649 0 1.96824 1.96824ZM4.65503 8.75C4.80521 16.0335 8.63806 20.4167 14.9555 20.4167H15.322V16.2498C17.6228 16.4829 19.3387 18.1999 20.0391 20.4167H23.3564C22.4565 17.1005 20.1232 15.267 18.673 14.5665C20.1221 13.7002 22.173 11.6 22.656 8.75H19.6379C19.0047 11.0676 17.1208 13.1679 15.3209 13.3674V8.75H12.2546V16.8337C10.3886 16.3675 7.95442 14.1003 7.85468 8.75H4.65503Z" fill="white" />
              </mask>
              <g mask="url(#mask0)">
                <rect width="28" height="28" rx="6.72" />
              </g>
            </svg>
            Войти через VK
          </button>
        </div>
        <p className="text-center text-xs text-neutral-500">
          Продолжая пользоваться сервисом, вы&nbsp;принимаете условия использования платформы Ярми
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalAuth;
