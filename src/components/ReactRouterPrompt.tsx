import React, { useCallback } from "react";
import { unstable_BlockerFunction as BlockerFunction } from "react-router-dom";

import useConfirm from "../hooks/useConfirm";

type ReactRouterPromptProps = {
  when: boolean | BlockerFunction;
  children: (data: {
    isActive: boolean;
    onCancel(): void;
    onConfirm(): void;
  }) => React.ReactNode;
  beforeCancel?: () => Promise<unknown>;
  beforeConfirm?: () => Promise<unknown>;
};

function ReactRouterPrompt({
  when,
  children,
  beforeCancel,
  beforeConfirm,
}: ReactRouterPromptProps) {
  const { isActive, onConfirm, resetConfirmation } = useConfirm(when);

  const onConfirmAction = useCallback(async () => {
    if (beforeConfirm) await beforeConfirm();
    onConfirm();
  }, [beforeConfirm, onConfirm]);

  const onResetAction = useCallback(async () => {
    if (beforeCancel) await beforeCancel();
    resetConfirmation();
  }, [beforeCancel, resetConfirmation]);

  if (isActive) {
    return (
      <>
        {children({
          isActive: true,
          onConfirm: onConfirmAction,
          onCancel: onResetAction,
        })}
      </>
    );
  }
  return null;
}

export default ReactRouterPrompt;
