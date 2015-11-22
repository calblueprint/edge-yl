require 'rails_helper'

FactoryGirl.factories.map(&:name).each do |factory_name|
  describe "The #{factory_name} factory" do
    it 'is valid' do
      factory = FactoryGirl.build(factory_name)
      expect(factory).to be_valid
    end
  end
end
