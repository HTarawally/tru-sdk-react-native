require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "tru-sdk-react-native"
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.source         = { git: 'https://gitlab.com/tru-id/tru-sdk-react-native.git', tag: s.version }

  s.platform       = { :ios => "12.0" }
  s.preserve_paths = 'LICENSE', 'README.md', 'package.json'
  s.source_files   = 'ios/*.{h,m}'
  s.resource_bundles = {
    'Resources' => ['ios/*.xcassets']
  }

  s.dependency "React"
  s.dependency 'Trusdk', '~> 0.0.1'
end
