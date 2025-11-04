import { getInitialsName } from '@/utils/getInitialsName';

type  Props = {
  userId: string
  name: string | null
  image: string | null
  balance: number
}

function Profile({ name, balance }: Props) {
  return (
    <div>
      <div className="container m-auto">
        <div className="flex gap-7">
          <div className="avatar avatar-placeholder">
            <div className="bg-base-300 w-50 rounded-full">
              <span className="text-4xl font-bold">{getInitialsName(name)}</span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="pt-10 flex flex-col gap-1">
              <span className="text-xl font-bold">
                {name}
              </span>
              <span className="text-sm">
                Баланс
                &nbsp;
                <span className="font-bold">
                  {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(balance || 0)}
                </span>
              </span>
            </div>
            <div role="tablist" className="tabs tabs-border">
              <a role="tab" className="tab tab-active">✨ Ожившие фотографии</a>
              <a role="tab" className="tab">💫 В процессе оживления…</a>
            </div>
          </div>
        </div>
        <div>
          bottom
        </div>
      </div>
    </div>
  );
}

export default Profile;
