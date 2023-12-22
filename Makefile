ifeq ($(which pnpm), pnpm not found)
	NPM := npm
else
	NPM := pnpm
endif

.PHONY: init
init:
	$(NPM) install

dev:
	$(NPM) run dev