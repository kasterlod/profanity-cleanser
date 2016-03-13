TEST_OUTPUT=$(npm test)

[ $TEST_OUTPUT -ne 0 ] && exit 1

exit 0
