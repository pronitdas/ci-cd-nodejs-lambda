module.exports.hello = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: `Your lambda function executed successfully! Env ${process.env.ENV}`,
      input: event,
    },
    null,
    2,
  ),
});
