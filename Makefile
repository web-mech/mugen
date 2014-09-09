test:
	@./node_modules/mocha/bin/_mocha -R $(REPORTER) -t 5000

.PHONY: test