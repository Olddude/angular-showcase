const execa = require('execa')
const path = require('path')
const { task, series, parallel } = require('gulp')

const config = {
  paths: {
    root: path.resolve(__dirname, '..'),
    ci: path.resolve(__dirname, '.'),
    client: path.resolve(__dirname, '../client'),
    server: path.resolve(__dirname, '../server')
  },
  cwd: process.cwd(),
  environment: process.env.NODE_ENV
}

task('config', (cb) => {
  console.log(JSON.stringify(config, null, 2))
  cb(0)
})

task('deploy-client', (cb) => {
  const clientDeployment = execa.command('git subtree push --prefix client client master', {
    cwd: config.paths.root,
    stdio: 'inherit'
  })
  clientDeployment.on('exit', code => {
    cb(code)
  })
})

task('deploy-server', (cb) => {
  const serverDeployment = execa.command('git subtree push --prefix server server master', {
    cwd: config.paths.root,
    stdio: 'inherit'
  })
  serverDeployment.on('exit', code => {
    cb(code)
  })
})

task('deploy', parallel('deploy-server', 'deploy-client'))

task('run-client', (cb) => {
  const clientRun = execa.command('node index.js', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })
  clientRun.on('exit', code => {
    cb(code)
  })
})

task('run-server', (cb) => {
  const serverRun = execa.command('node index.js', {
    cwd: config.paths.server,
    stdio: 'inherit'
  })
  serverRun.on('exit', code => {
    cb(code)
  })
})

task('run', parallel('run-server', 'run-client'))

task('install-client', (cb) => {
  const installClientRun = execa.command('npm install', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })
  installClientRun.on('exit', code => {
    cb(code)
  })
})

task('install-server', (cb) => {
  const installServerRun = execa.command('npm install', {
    cwd: config.paths.server,
    stdio: 'inherit'
  })
  installServerRun.on('exit', code => {
    cb(code)
  })
})

task('install', parallel('install-server', 'install-client'))

task('lint', (cb) => {
  const lintRun = execa.command('npx ng lint', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })
  lintRun.on('exit', code => {
    cb(code)
  })
})

task('test', (cb) => {
  const testRun = execa.command('npx ng test', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })
  testRun.on('exit', code => {
    cb(code)
  })
})

task('e2e', (cb) => {

  const e2eRun = execa.command('npx ng e2e', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })

  e2eRun.on('exit', () => {
    apiRun.emit('message', 'kill')
  })

  const apiRun = execa.command('node index.js', {
    cwd: config.paths.server,
    stdio: 'inherit'
  })

  apiRun.on('message', message => {
    if (message === 'kill') {
      process.kill(apiRun.pid)
    }
  })

  apiRun.on('exit', () => {
    cb(0)
  })

})

task('build', (cb) => {
  const buildRun = execa.command('npx ng build', {
    cwd: config.paths.client,
    stdio: 'inherit'
  })
  buildRun.on('exit', code => {
    cb(code)
  })
})

exports['config'] = 'config'
exports['install-server'] = 'install-server'
exports['install-client'] = 'install-client'
exports['install'] = 'install'
exports['lint'] = 'lint'
exports['test'] = 'test'
exports['e2e'] = 'e2e'
exports['build'] = 'build'
exports['deploy-server'] = 'deploy-server'
exports['deploy-client'] = 'deploy-client'
exports['deploy'] = 'deploy'
exports['run-server'] = 'run-server'
exports['run-client'] = 'run-client'
exports['run'] = 'run'
exports.default = series(
  'install',
  'lint',
  'test',
  'e2e',
  'build',
  'deploy'
)
