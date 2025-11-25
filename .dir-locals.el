((js-mode
  . ((eval
      ;; Based on the discussion starting at
      ;; https://github.com/flycheck/flycheck/issues/1384#issuecomment-356919186
      ;; and https://emacs.stackexchange.com/a/53017/14429
      . (setq-local flycheck-javascript-eslint-executable
                    (expand-file-name "node_modules/.bin/eslint"
                                      (locate-dominating-file default-directory
                                                              dir-locals-file)))))))
