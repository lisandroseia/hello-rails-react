class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.find(Greeting.pluck(:id).sample)
    render json: {
      greeting: @greeting
    }
  end
end
