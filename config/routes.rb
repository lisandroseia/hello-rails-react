Rails.application.routes.draw do
  root 'static#index'
  get 'greetings', to: 'greetings#index'
  
  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
end
