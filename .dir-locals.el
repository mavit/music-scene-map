;; https://github.com/flycheck/flycheck/issues/1384#issuecomment-356919186
((js-mode
  . ((eval . (progn
               (add-to-list 'exec-path
                            (concat (locate-dominating-file default-directory
                                                            ".dir-locals.el")
                                    "node_modules/.bin/")))))))
