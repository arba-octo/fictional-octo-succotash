'use client';

import { useAppDispatch, useAppSelector } from '@/redux/upload/uploadHooks';
import { selectPromptId, setPromptId } from '@/redux/upload/uploadSlice';

type Props = {
  id: string;
  title: string;
  emoji: string;
};

function UploadPromptItem({ id, title, emoji }: Props) {
  const dispatch = useAppDispatch();
  const promptId = useAppSelector(selectPromptId);

  return (
    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-3">
      <label className="label">
        <input
          type="checkbox"
          className="checkbox checkbox-sm checked:bg-base-100"
          checked={id === promptId}
          onChange={() => dispatch(setPromptId(id === promptId ? '' : id))}
        />
        {title}
        {emoji}
      </label>
    </fieldset>
  );
}

export default UploadPromptItem;
