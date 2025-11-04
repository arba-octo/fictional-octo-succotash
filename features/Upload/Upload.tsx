'use client';

import UploadAction from '@/features/Upload/UploadAction';
import UploadRequired from '@/features/Upload/UploadRequired';
import UploadChoice from '@/features/Upload/UploadChoice';

function UploadPage() {
  return (
    <div className="py-6 h-full">
      <div className="container m-auto h-full">
        <div className="card h-full grid grid-rows-[1fr_auto]">
          <div className="grid grid-cols-[auto_1fr] gap-10 h-full">
            <div className="relative card-body max-w-[410px] w-full bg-base-200">
              <UploadAction />
            </div>
            <UploadChoice />
          </div>
          <UploadRequired />
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
